import type { Actions } from './$types';
import auditListing from '$lib/audit';

export const actions: Actions = {
  audit: async ({ request }) => {
    console.log("Auditing")
    const data = await request.formData();
    const url = data.get('bnburl');

    // Validate the URL
    if (!url || typeof url !== 'string') {
      return { success: false, error: 'Invalid URL format' };
    }

    
    // Call the scraper function and log the result
    const result = await auditListing(url);
    console.log('Audit result:', result);

    return { success: true, result };
  },
};
