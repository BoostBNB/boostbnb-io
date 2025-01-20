import type { Actions } from './$types';
import scrapeListing from '$lib/scraper';

export const actions: Actions = {
  scrape: async ({ request }) => {
    const data = await request.formData();
    const url = data.get('bnburl');

    // Validate the URL
    if (!url || typeof url !== 'string') {
      return { success: false, error: 'Invalid URL format' };
    }

    
    // Call the scraper function and log the result
    const result = scrapeListing(url);
    console.log('Scraped result:', result);

    return { success: true, result };
  },
};
