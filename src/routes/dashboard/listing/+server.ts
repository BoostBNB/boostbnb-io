import { json } from '@sveltejs/kit';
import { supabase } from '$lib/db/index';
import type { RequestHandler } from './$types';


export const GET: RequestHandler = async ({ locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('user_data')
    .select('listings')
    .eq('user_id', user.id)
    .single();

  if (error) {
    return json({ error: error.message }, { status: 400 });
  }

  return json({ success: true, listings: data.listings });
};


export const POST: RequestHandler = async ({ request, locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { new_listing } = await request.json();

  // Fetch the current listings
  let { data: userData, error: fetchError } = await supabase
    .from('user_data')
    .select('listings')
    .eq('user_id', user.id)
    .single();

  if (fetchError) {
    return json({ error: fetchError.message }, { status: 400 });
  }

  if (!userData || !Array.isArray(userData.listings)) {
    return json({ error: "Listings field is not an array" }, { status: 400 });
  }

  // Prevent duplicate listings
  if (userData.listings.includes(new_listing)) {
    return json({ error: "This listing already exists." }, { status: 400 });
  }

  // Append and update
  const updatedListings = [...userData.listings, new_listing];

  const { data, error } = await supabase
    .from('user_data')
    .update({ listings: updatedListings })
    .eq('user_id', user.id)
    .select();

  if (error) {
    return json({ error: error.message }, { status: 400 });
  }

  return json({ success: true, data });
};


export const DELETE: RequestHandler = async ({ request, locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { listing_to_delete } = await request.json();

  // Fetch current listings
  let { data: userData, error: fetchError } = await supabase
    .from('user_data')
    .select('listings')
    .eq('user_id', user.id)
    .single();

  if (fetchError) {
    return json({ error: fetchError.message }, { status: 400 });
  }

  if (!userData || !Array.isArray(userData.listings)) {
    return json({ error: "Listings field is not an array" }, { status: 400 });
  }

  // Filter out the listing to be deleted
  const updatedListings = userData.listings.filter(listing => listing !== listing_to_delete);

  // Update database
  const { data, error } = await supabase
    .from('user_data')
    .update({ listings: updatedListings })
    .eq('user_id', user.id)
    .select();

  if (error) {
    return json({ error: error.message }, { status: 400 });
  }

  return json({ success: true, data });
};
