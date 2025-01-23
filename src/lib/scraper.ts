import puppeteer from 'puppeteer';

export async function scrapeAirbnbListing(url: string): Promise<any> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log(`Navigating to URL: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });

    // Wait for key elements to load
    console.log('Waiting for content to load...');
    await page.waitForSelector('h1', { timeout: 60000 }); // Wait for title
    await page.waitForSelector('h2', { timeout: 60000 }); // Wait for property_type + location
    await page.waitForSelector('div[data-plugin-in-point-id="DESCRIPTION_DEFAULT"]', { timeout: 60000 }); // Wait for description
    await page.waitForSelector('ol', { timeout: 60000 }); // Wait for guest details
    await page.waitForSelector('span._11jcbg2', { timeout: 60000 }); // Wait for nightly rate
    await page.waitForSelector('div._14omvfj', { timeout: 60000 }); // Wait for cleaning fee

    // Extract data
    console.log('Extracting listing details...');
    const listingDetails = await page.evaluate(() => {
      const getText = (selector: string) => {
        const element = document.querySelector(selector);
        return element ? element.textContent?.trim() || 'Not specified' : 'Not specified';
      };

      const parsePropertyTypeAndLocation = (text: string) => {
        const [propertyType, location] = text.split(' in ');
        return { propertyType: propertyType?.trim() || 'Not specified', location: location?.trim() || 'Not specified' };
      };

      const parseGuestDetails = () => {
        const guestDetails = document.querySelector('ol')?.querySelectorAll('li');
        if (!guestDetails) return { guestCapacity: 'Not specified', bedrooms: 'Not specified', beds: 'Not specified', baths: 'Not specified' };

        const detailsArray = Array.from(guestDetails).map((li) => li.textContent?.trim() || '');
        return {
          guestCapacity: detailsArray[0] || 'Not specified',
          bedrooms: detailsArray[1] || 'Not specified',
          beds: detailsArray[2] || 'Not specified',
          baths: detailsArray[3] || 'Not specified',
        };
      };

      const extractPrice = () => {
        const priceElement = document.querySelector('span._11jcbg2');
        const priceText = priceElement?.textContent?.trim() || '';
        const match = priceText.match(/\$([\d,]+)/); // Match the first dollar sign and number
        return match ? parseInt(match[1].replace(/,/g, ''), 10) : 'Not specified';
      };

      const extractCleaningFee = () => {
        const feeElement = document.querySelector('div._14omvfj');
        if (!feeElement) return 'Not specified';
        const feeText = feeElement.textContent?.trim() || '';
        const match = feeText.match(/Cleaning fee.*?\$([\d,]+)/i); // Match "Cleaning fee" followed by a dollar sign and number
        return match ? parseInt(match[1].replace(/,/g, ''), 10) : 'Not specified';
      };

      // Extract and parse property_type and location
      const propertyTypeAndLocationText = getText('h2');
      const { propertyType, location } = parsePropertyTypeAndLocation(propertyTypeAndLocationText);

      // Extract guest details
      const guestDetails = parseGuestDetails();

      // Extract price and cleaning fee
      const nightlyRate = extractPrice();
      const cleaningFee = extractCleaningFee();

      return {
        title: getText('h1'), // First <h1> for title
        description: getText('div[data-plugin-in-point-id="DESCRIPTION_DEFAULT"]'), // Description
        property_type: propertyType,
        location: location,
        guest_capacity: guestDetails.guestCapacity,
        bedrooms: guestDetails.bedrooms,
        beds: guestDetails.beds,
        baths: guestDetails.baths,
        nightly_rate: nightlyRate,
        cleaning_fee: cleaningFee,
        dynamic_pricing: 'Not implemented', // Placeholder for future implementation
        minimum_stay: 'Not implemented', // Placeholder for future implementation
        photo_count: 'Not implemented', // Placeholder for future implementation
        captions: 'Not implemented', // Placeholder for future implementation
        review_count: 'Not implemented', // Placeholder for future implementation
        rating: 'Not implemented', // Placeholder for future implementation
        recent_reviews: 'Not implemented', // Placeholder for future implementation
        occupancy_rate: 'Not implemented', // Placeholder for future implementation
        seasonality: 'Not implemented', // Placeholder for future implementation
        provided_amenities: [], // Placeholder for future implementation
        missing_amenities: ['Hot tub', 'Parking'], // Example placeholders
        keywords_in_title: '', // Placeholder for manual review
        keywords_in_description: '', // Placeholder for manual review
      };
    });

    console.log('Extracted listing details:', JSON.stringify(listingDetails, null, 2));
    return { listing_details: listingDetails };
  } catch (error) {
    console.error('Error scraping Airbnb listing:', error);
    throw error;
  } finally {
    console.log('Closing browser...');
    await browser.close();
  }
}
