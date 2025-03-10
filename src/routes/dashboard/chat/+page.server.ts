import type { Actions } from './$types';
import { askChatGPT } from '$lib/chat';
import { supabase } from '$lib/db';

export const actions: Actions = {
  chatResponse: async ({ request, locals }) => {
    const { user } = locals.session || {};

    // Fail if the user object dosen't exist
    if (!user) {
      console.log('No User Found');
      return { success: false, error: 'User is undefined' };
    }

    console.log('Requesting ChatGPT');

    // Fetch Existing Listings on Current User
    const { data: listingContext, error } = await supabase.from('listings').select('url, data').eq('user_id', user.id);

    if (error) {
      console.log(error);
      return { success: false, error };
    }

    // Get User Prompt
    const formData = await request.formData();
    const prompt = formData.get('prompt') as string;

    if (!prompt) {
      console.log('No prompt Present');
      return { success: false, error: 'No prompt given' };
    }

    //Format listing data and user message into Prompt Engineered text
    const structuredPrompt = `
    You are Cohost AI, an intelligent assistant specialized in helping Airbnb hosts optimize their listings and manage guest interactions.
    Your primary tasks include:
    - Improving listing descriptions for better search ranking and guest appeal.
    - Providing responses to guest inquiries and reviews in a professional, engaging manner.
    - Suggesting pricing and amenities improvements based on similar top-performing listings.
    - Assisting with host messaging and automation strategies.
   
    User's Listings:
    ${JSON.stringify(listingContext)}
   
    User's Request:
    ${prompt}
   
    Provide a clear, concise, and optimized response or suggestion.
    `;

    //console.log('Prompt: ', structuredPrompt);

    const result = await askChatGPT(structuredPrompt);
    console.log('Response: ', result);

    // Save User Prompt and ChatGPT response to Database

    const { data: userDataOrNull, error: dbError } = await supabase.from('cohost_conversations').select('chats').eq('user_id', user.id);
    let userData = userDataOrNull;

    if (dbError || userDataOrNull == null) {
      console.error('DB Error: ', dbError);
      return { success: false, error: dbError };
    }

    // If user is not yet registered in cohost_conversations table
    if (userData?.length == 0 || userData == null) {
      const { error: insErr } = await supabase.from('cohost_conversations').insert({
        user_id: user.id,
        chats: [],
      });

      if (insErr) {
        console.error(insErr);
        return { success: false, error: insErr };
      }

      const res = await supabase.from('cohost_conversations').select('chats').eq('user_id', user.id);

      if (res.error || res.data == null) {
        console.error(res.error);
        return { success: false, error: res.error };
      }

      userData = res.data;
    }

    //console.log("User Data: ", userData);

    const chats = [...userData[0].chats];

    chats.push({
      user_prompt: prompt,
      chat_response: result,
      timestamp: new Date(Date.now()).toString(),
    });

    console.log('Chats: ', chats);

    const { error: insError } = await supabase.from('cohost_conversations').update({ chats }).eq('user_id', user.id);

    if (insError) {
      console.error('Insertion Error: ', insError);
      return { success: false, error: insError };
    }

    return { success: true, result };
  },
};
