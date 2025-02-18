import { json } from '@sveltejs/kit';
import { supabase } from '$lib/db/index';
import type { RequestHandler } from './$types';

// ✅ GET: Retrieve all listings for the user
export const GET: RequestHandler = async ({ locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('listings')
    .select('id, url, data, time')
    .eq('user_id', user.id)
    .order('time', { ascending: false });

  if (error) {
    return json({ error: error.message }, { status: 400 });
  }

  return json({ success: true, listings: data });
};

// ✅ POST: Add a new listing (if it doesn’t exist)
export const POST: RequestHandler = async ({ request, locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const url = body.url?.trim(); // ✅ Ensure `url` is a valid string

  if (!url) {
    return json({ error: "URL is required." }, { status: 400 });
  }

  // ✅ Try inserting a new listing, prevent duplicates (handled by UNIQUE INDEX)
  const { data, error } = await supabase
    .from('listings')
    .insert([{ user_id: user.id, url, data: {} }]) // ✅ Ensure URL is valid
    .select();

  if (error) {
    if (error.code === '23505') { // Duplicate entry (violates UNIQUE constraint)
      return json({ error: "This listing already exists." }, { status: 400 });
    }
    return json({ error: error.message }, { status: 400 });
  }

  return json({ success: true, data });
};


// ✅ DELETE: Remove a listing by URL instead of ID
export const DELETE: RequestHandler = async ({ request, locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { url } = await request.json();

  // ✅ Delete the listing by URL only if it belongs to the user
  const { error } = await supabase
    .from('listings')
    .delete()
    .eq('user_id', user.id)
    .eq('url', url);

  if (error) {
    return json({ error: error.message }, { status: 400 });
  }

  return json({ success: true });
};
