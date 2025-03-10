import { scrapeAirbnbListing } from './scraper';
import { askChatGPT } from './chat';
import { supabase } from '$lib/db/index';

export default async function auditListing(url: string, email: string): Promise<string> {
  //regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }

  //regex for url validation must be airbnb.com/rooms
  const urlRegex = /^https:\/\/www\.airbnb\.com\/rooms\/.+$/;

  if (!urlRegex.test(url)) {
    throw new Error('Invalid URL format');
  }

  // Adds Email To The Database
  const { error } = await supabase.from('emails').insert({ email });

  if (error) {
    if (error.code == '23505') {
      console.log('Warning: User entered a duplicate email');
    } else {
      console.error(error);
      throw new Error('Failed to insert new email into the database');
    }
  }

  try {
    // Scrape the listing details
    const listing_details = await scrapeAirbnbListing(url);
    console.log(listing_details);

    console.log(listing_details);
    // Construct ChatGPT prompt with scraped data
    const prompt = `
You are an expert in Airbnb listing optimization. Your task is to 
analyze the following listing data and provide a comprehensive audit, 
including an overall score and actionable feedback to improve the 
listing's performance. Focus on key areas: Title & Description, 
Pricing, Photos, Reviews, Amenities, and SEO:
--Listing Details--
- Title: ${listing_details.title}
- Description: ${listing_details.description}
- Property Type: ${listing_details.propertyType}
- Room Type: ${listing_details.roomType}
- Location: ${listing_details.location}
- Guest Capacity: ${listing_details.guestCapacity}
--Pricing--
- Nightly Rate: $${listing_details.pricing.nightlyRate}
- Cleaning Fee: $${listing_details.pricing.cleaningFee}
- Dynamic Pricing: ${listing_details.pricing.dynamicPricing}
- Minimum Stay: ${listing_details.pricing.minimumStay} nights
--Photos--
- Photo Count: ${listing_details.photos.photoCount}
- Captions: ${listing_details.photos.captions}
--Reviews--
- Review Count: ${listing_details.reviews.reviewCount}
- Rating: ${listing_details.reviews.rating}
- Recent Reviews: ${listing_details.reviews.recentReviews}
--Amenities--
- Provided Amenities: ${listing_details.amenities.provided.join(', ')}
- Missing Amenities: ${listing_details.amenities.missing.join(', ')}
--SEO--
-keywords: ${listing_details.seo.keywords}
-description: ${listing_details.seo.description}

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
