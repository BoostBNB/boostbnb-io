import type { Actions } from './$types';

export const actions = {
  scrape: async ({ request }) => {
    // TO-DO: Scrape the Airbnb page from the URL
    const data = await request.formData();
    const url = data.get('bnburl');
    console.log(url);
  },
} satisfies Actions;
