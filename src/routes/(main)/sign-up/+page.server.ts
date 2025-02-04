// src/routes/+page.server.ts
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
  const { session } = await safeGetSession();

  // if the user is already logged in return them to the home page
  if (session) {
    redirect(303, '/dashboard');
  }

  return { url: url.origin };
};

export const actions: Actions = {
  default: async (event) => {
    const {
      request,
      locals: { supabase },
    } = event;
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    // eslint-disable-next-line no-useless-escape
    const validEmail = /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,8}$/.test(email);

    if (!validEmail) {
      return fail(400, { errors: { email: 'Please enter a valid email address' }, email });
    }

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

    return {
      success: true,
      message: 'Please check your email to finish setting up your account.',
    };
  },
};
