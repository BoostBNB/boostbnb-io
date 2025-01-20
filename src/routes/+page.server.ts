import type { Actions } from './$types';
import scrapeListing from '$lib/scraper';

export const actions = {
  scrape: async ({ request }) => {
    // TO-DO: Scrape the Airbnb page from the URL
    const data = await request.formData();
    const url = data.get('bnburl');
    scrapeListing(url);
  },
} satisfies Actions;
