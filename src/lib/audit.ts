import { scrapeAirbnbListing } from './scraper';
import { askChatGPT } from './chat';

export default async function auditListing(url: string): Promise<string> {
  try {
    // Scrape the listing details
    const { listing_details } = await scrapeAirbnbListing(url);

    // Construct ChatGPT prompt with scraped data
    const prompt = `
You are an expert in Airbnb listing optimization. Analyze the following listing data and provide a comprehensive audit:
- Title: ${listing_details.title}
- Description: ${listing_details.description}
- Property Type: ${listing_details.property_type}
- Room Type: ${listing_details.room_type}
- Location: ${listing_details.location}
- Guest Capacity: ${listing_details.guest_capacity}
- Nightly Rate: $${listing_details.nightly_rate}
- Cleaning Fee: $${listing_details.cleaning_fee}
- Dynamic Pricing: ${listing_details.dynamic_pricing}
- Minimum Stay: ${listing_details.minimum_stay} nights
- Photo Count: ${listing_details.photo_count}
- Captions: ${listing_details.captions}
- Review Count: ${listing_details.review_count}
- Rating: ${listing_details.rating}
- Recent Reviews: ${listing_details.recent_reviews}
- Provided Amenities: ${listing_details.provided_amenities.join(', ')}
- Missing Amenities: ${listing_details.missing_amenities.join(', ')}

Provide:
1. An overall score out of 100 with reasoning.
2. Feedback on each category.
3. Top 3 action items to improve this listing.

Return the result as JSON.
`;

    const result = await askChatGPT(prompt);
    return result;
  } catch (error) {
    console.error('Error auditing listing:', error);
    throw new Error('Failed to audit Airbnb listing');
  }
}
