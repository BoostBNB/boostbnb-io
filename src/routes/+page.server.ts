import type { Actions } from './$types';
import { superValidate, message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import auditListing from '$lib/audit';
import { z } from 'zod';

const schema = z.object({
  url: z.string().url(),
  email: z.string().email(),
});

export const load = async () => {
  const form = await superValidate(zod(schema));
  return { form };
};

export const actions: Actions = {
  audit: async ({ request }) => {
    const form = await superValidate(request, zod(schema));
    const url = form.data.url;
    const email = form.data.email;

    if (!form.valid) {
      return fail(400, { form });
    }

    // Call the scraper function and log the result
    const result = await auditListing(url, email);
    console.log('Audit result:', result);

    return message(form, 'Form posted successfully!');
  },
};
