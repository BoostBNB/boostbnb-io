import { json } from '@sveltejs/kit';
import { supabase } from '$lib/db/index';
import type { RequestHandler } from './$types';
import { scrapeAirbnbListing } from '$lib/scraper'; // Import the function

export const POST: RequestHandler = async ({ request, locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { url } = await request.json();

  if (!url || typeof url !== "string" || url.trim() === "") {
    return json({ error: "URL is required." }, { status: 400 });
  }


  let scrapedData;
  try {
    scrapedData = await scrapeAirbnbListing(url);
  } catch (error) {
    console.error("Scraping failed:", error);
    return json({ error: "Failed to scrape listing data." }, { status: 500 });
  }

 
  const { data, error } = await supabase
    .from('listings')
    .insert([{ user_id: user.id, url, data: scrapedData }]) //  Save scraped JSON
    .select();

  if (error) {
    if (error.code === '23505') {
      // Duplicate entry (violates UNIQUE constraint)
      return json({ error: 'This listing already exists.' }, { status: 400 });
    }
    return json({ error: error.message }, { status: 400 });
  }

  return json({ success: true, data });
};

export const GET: RequestHandler = async ({ locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  
  const { data, error } = await supabase
    .from('listings')
    .select('url, data') // Fetch only relevant fields
    .eq('user_id', user.id)
    .order('time', { ascending: false });

  if (error) {
    return json({ error: error.message }, { status: 400 });
  }

  
  const listings = data.map(listing => ({
    url: listing.url,
    data: listing.data || {} // Ensure data is an object, not null
  }));

  return json({ success: true, listings });
};

export const DELETE: RequestHandler = async ({ request, locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { url } = await request.json();

  if (!url || typeof url !== "string" || url.trim() === "") {
    return json({ error: "URL is required." }, { status: 400 });
  }


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