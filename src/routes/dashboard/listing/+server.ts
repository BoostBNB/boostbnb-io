import { json } from '@sveltejs/kit';
import { supabase } from '$lib/db/index';
import type { RequestHandler } from './$types';

export const DELETE: RequestHandler = async ({ request, locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { url } = await request.json();

  if (!url || typeof url !== 'string' || url.trim() === '') {
    return json({ error: 'URL is required.' }, { status: 400 });
  }

  const { error } = await supabase.from('listings').delete().eq('user_id', user.id).eq('url', url);

  if (error) {
    return json({ error: error.message }, { status: 400 });
  }

  return json({ success: true });
};
