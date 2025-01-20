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

    try {
      // Check if the string is a valid URL
      new URL(url); // Will throw an error if invalid
    } catch {
      return {
        success: false,
        error: 'Invalid URL format',
        status: 400, // Explicitly set HTTP status code
      };
    }

    // Call the scraper function and log the result
    const result = scrapeListing(url);
    console.log('Scraped result:', result);

    return { success: true, result };
  },
};
