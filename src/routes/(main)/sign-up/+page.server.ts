import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async (event) => {
    const {
      request,
      locals: { supabase },
    }: {
      request: Request;
      locals: { supabase: any };
    } = event;

    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // eslint-disable-next-line no-useless-escape
    const validEmail = /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,8}$/.test(email);
    if (!validEmail) {
      return fail(400, { errors: { email: 'Please enter a valid email address' }, email });
    }

    // ✅ Step 1: Sign up the user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'http://localhost:5173/log-in',
      },
    });

    if (error) {
      return fail(400, {
        success: false,
        email,
        message: `There was an issue, Please contact support.`,
      });
    }

    // ✅ Step 2: Ensure the user exists before adding them to `user_data`
    if (data.user) {
      const { error: insertError } = await supabase.from('user_data').insert([
        { user_id: data.user.id, listings: [] }, // ✅ Empty array for listings
      ]);

      if (insertError) {
        console.error('Insert error:', insertError.message);
      }
    }

    return {
      success: true,
      message: 'Please check your email to finish setting up your account.',
    };
  },
};
