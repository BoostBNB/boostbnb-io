import type { Actions } from './$types';
import { scrapeAirbnbListing } from '$lib/scraper';
import { fail } from '@sveltejs/kit';
import { supabase } from '$lib/db/index';

export const load = async ({ locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return { listings: [] };
  }

  const { data, error } = await locals.supabase.from('listings').select('url, data').eq('user_id', user.id);

  if (error) {
    console.error('Error fetching listings:', error.message);
    return { listings: [] };
  }

  return { listings: data || [] };
};

export const actions: Actions = {
  audit: async ({ request, locals }) => {
    const { user } = locals.session || {};

    // Fail if the user object dosen't exist
    if (!user) return fail(401);

    const formData = await request.formData();
    const url = formData.get('bnburl');

    // Validate the URL
    if (!url || typeof url !== 'string') {
      return { success: false, error: 'Invalid URL format' };
    }

    let scrapedData;
    try {
      scrapedData = await scrapeAirbnbListing(url);
    } catch (error) {
      console.error('Scraping failed:', error);
      return fail(500);
    }

    const { data, error } = await supabase
      .from('listings')
      .insert([{ user_id: user.id, url, data: scrapedData }]) //  Save scraped JSON
      .select();

    if (error) {
      if (error.code === '23505') {
        // Duplicate entry (violates UNIQUE constraint)
        return fail(400);
      }
      console.log(`Error ${error?.code} in adding listing`);
      return fail(400);
    }

    return { success: true, data };
  },
};
