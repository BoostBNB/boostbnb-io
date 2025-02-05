// src/routes/+page.server.ts
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const load = async ({ locals: { safeGetSession } }) => {
  // If the user is signed in, redirect to /
  const { session } = await safeGetSession();
  if (session) redirect(303, '/');

  // Return the form to the page for validation
  const form = await superValidate(zod(schema));
  return { form };
};

export const actions: Actions = {
  default: async (event) => {
    const {
      request,
      locals: { supabase },
    } = event;

    const form = await superValidate(request, zod(schema));
    const email = form.data.email;
    const password = form.data.password;

    if (!form.valid) {
      return fail(400, { form });
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return fail(500, {
        success: false,
        email,
        message: `There was an issue, Please contact support.`,
        form,
      });
    }
    return message(form, 'Signing in...');
  },
};
