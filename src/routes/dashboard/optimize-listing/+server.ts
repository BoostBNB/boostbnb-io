import { json, type RequestEvent } from '@sveltejs/kit';
import { askChatGPT } from '$lib/chat';
import { supabase } from '$lib/db/index';

export const POST = async ({ request, locals }: RequestEvent) => {
  try {
    const { user } = locals.session || {};
    if (!user) {
      console.error('Unauthorized request - No user found');
      return json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Handle empty or malformed JSON body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error('Invalid JSON body:', error);
      return json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { url } = body;
    if (!url || typeof url !== 'string' || url.trim() === '') {
      console.error('URL is missing or invalid');
      return json({ error: 'URL is required.' }, { status: 400 });
    }

    // Fetch listing data for the given URL associated with the user
    const { data, error } = await supabase.from('listings').select('data').eq('user_id', user.id).eq('url', url).single();

    if (error || !data) {
      console.error('Listing not found or error fetching:', error);
      return json({ error: 'Listing not found.' }, { status: 404 });
    }

    // Wait for ChatGPT response before returning JSON
    const aiResponse = await askChatGPT(
      `You are an Airbnb listing optimization expert with deep knowledge of what makes a listing 
        succeed on the Airbnb platform. I will provide you with the current listing details, including the 
        property information, pricing, photos, reviews, availability, and amenities. Your job is to craft an 
        optimized listing description, improved title ideas, recommended photo captions, and additional 
        suggestions that will maximize bookings.
        Instructions & Goals:
        1. Make the Title Pop: Suggest at least three alternative listing titles that are concise, 
        capture the essence of the property, and incorporate appealing adjectives or unique 
        selling points.
        2. Revise the Description: Rewrite or refine the existing property description to be 
        compelling, guest-focused, and to highlight the unique advantages of staying here. 
        Encourage guests to imagine themselves enjoying the property and the surrounding 
        area.
        3. Bullet-Point Key Features: Provide a succinct bullet list that emphasizes the property’s 
        best amenities, standout features, and location perks.
        4. Photo Caption Recommendations: Based on the current photos and their captions, 
        suggest any adjustments or new captions that can better showcase the property’s 
        unique appeal.
        5. Guest Persona Alignment: Tailor your language to attract the most likely guest 
        personas (e.g., families, couples, business travelers, digital nomads, etc.) based on the 
        property’s attributes and location.
        6. Amenity & Pricing Suggestions: From the provided amenities and pricing info, 
        recommend:
        ○ Additional amenities or small improvements that might increase bookings or 
        justify a higher nightly rate.
        ○ Whether the current pricing strategy (including dynamic pricing and cleaning fee) 
        seems aligned with the local market and property value.
        7. Highlight Unique Location or Experience: If the listing is near popular attractions, 
        unique local experiences, or in a special neighborhood, weave that into the description in
        an inviting way.
        8. Review & Occupancy Insights: If there are recent reviews or occupancy data, use 
        them strategically to build trust in the listing and highlight consistent high points or 
        address any concerns.
        9. Write Clearly & Persuasively: Use a friendly, welcoming tone. Ensure grammar is 
        perfect, and the text flows naturally.\nbelow is the data you have to work with\n` +
        JSON.stringify(data) +
        `\n\nYour Task:
        1. Provide three optimized, attention-grabbing titles.
        2. Present an improved, cohesive, and engaging description that integrates the property’s 
        best features, location benefits, and amenities in a way that speaks directly to potential 
        guests.
        3. Create a bullet-point list of key property highlights.
        4. Offer photo caption improvements or suggestions.
        5. Propose how to better leverage reviews or occupancy data.
        6. Recommend any adjustments to amenities, pricing, or listing details to increase overall 
        appeal and booking rate.
        Output Format:
        ● Optimized Titles (list of 3 options)
        ● Optimized Description (1–2 paragraphs)
        ● Key Features Bullet List (5–10 bullet points)
        ● Photo Caption Recommendations (brief notes or sample captions)
        ● Review/Occupancy Insights (1 paragraph or bullet points)
        ● Pricing & Amenity Suggestions (1 paragraph or bullet points)
        ● Any Additional Tips (optional)
        Be sure the rewritten content is entirely original while retaining critical factual details of the 
        property (e.g., location, bed count). Write concisely and persuasively so the listing can rank 
        higher in Airbnb searches and convert more viewers into bookers.`,
    );

    return json({ success: true, Optimisation: aiResponse });
  } catch (error) {
    console.error('Unexpected error in optimizer:', error);
    return json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
