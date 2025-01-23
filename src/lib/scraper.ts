import puppeteer from 'puppeteer';

const TITLE_SELECTOR = 'div > div > div > div > div > section > div > div._t0tx82 > div > h1';
const PRICE_SELECTOR = 'div > div > div > div > div > div > div > div._wgmchy > div._1k1ce2w > div > div > span > div > span._11jcbg2';
const PROPERTY_TYPE_SELECTOR =
  'div > div > div > section > div.toieuka.atm_c8_2x1prs.atm_g3_1jbyh58.atm_fr_11a07z3.atm_cs_10d11i2.atm_c8_sz6sci__oggzyc.atm_g3_17zsb9a__oggzyc.atm_fr_kzfbxz__oggzyc.dir.dir-ltr > h2';
const ROOM_INFO_SELECTOR =
  'div > div > div > section > div.o1kjrihn.atm_c8_km0zk7.atm_g3_18khvle.atm_fr_1m9t47k.atm_h3_1y44olf.atm_c8_2x1prs__oggzyc.atm_g3_1jbyh58__oggzyc.atm_fr_11a07z3__oggzyc.dir.dir-ltr > ol > li';
const PERK_LIST_SELECTOR = 'section > div.i1jq8c6w.atm_9s_1txwivl.atm_ar_1bp4okc.atm_cx_1tcgj5g_95nicl.dir.dir-ltr > div';
const DESCRIPTION_SELECTOR =
  'div > div > section > div > div > div.p1psejvv.atm_9s_1bgihbq.dir.dir-ltr > div > div._1jza0fl > section > div > div > div > div > div > div > div > div._tp3sbt';
const SHOW_ALL_AMENITIES_SELECTOR = 'section > div.b9672i7.atm_h3_8tjzot.atm_h3_1ph3nq8__oggzyc.dir.dir-ltr > button';
const AMENITIES_LIST_SELECTOR =
  'div > div > section > div > div > div.p1psejvv.atm_9s_1bgihbq.dir.dir-ltr > div > div._17itzz4 > div > div > div > section > section > div';
const RATING_SELECTOR =
  'div > div > div > a > div > div.a8jhwcl.atm_c8_vvn7el.atm_g3_k2d186.atm_fr_1vi102y.atm_9s_1txwivl.atm_ar_1bp4okc.atm_h_1h6ojuz.atm_cx_t94yts.atm_le_14y27yu.atm_c8_sz6sci__14195v1.atm_g3_17zsb9a__14195v1.atm_fr_kzfbxz__14195v1.atm_cx_1l7b3ar__14195v1.atm_le_1l7b3ar__14195v1.dir.dir-ltr > div:nth-child(2)';
const REVIEW_COUNT_SELECTOR =
  'div > div > div > a > div > div.rddb4xa.atm_9s_1txwivl.atm_ar_1bp4okc.atm_h_1h6ojuz.atm_cx_t94yts.atm_le_yh40bf.atm_le_idpfg4__14195v1.atm_cx_idpfg4__14195v1.dir.dir-ltr > div.r16onr0j.atm_c8_vvn7el.atm_g3_k2d186.atm_fr_1vi102y.atm_gq_myb0kj.atm_vv_qvpr2i.atm_c8_sz6sci__14195v1.atm_g3_17zsb9a__14195v1.atm_fr_kzfbxz__14195v1.atm_gq_idpfg4__14195v1.dir.dir-ltr';
const REVIEW_LIST_SELECTOR = 'div > section > div._88xxct > div > div > div._b7zir4z';

export async function scrapeAirbnbListing(url: string): Promise<any> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log('Waiting For Full Page To Load ...');
  await page.goto(url);
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  try {
    console.log('Getting Basic Data');

    // Title
    const titleHandle = await page.$(TITLE_SELECTOR);
    const title = titleHandle != null ? await page.evaluate((el) => el.innerText, titleHandle) : null;

    // Nightly Rate
    const priceHandle = await page.$(PRICE_SELECTOR);
    const nightlyRate = priceHandle != null ? await page.evaluate((el) => el.innerText, priceHandle) : null;

    // Property Type & Location
    const propertyTypeHandle = await page.$(PROPERTY_TYPE_SELECTOR);
    const propertyInfo = await page.evaluate((el) => el?.innerText, propertyTypeHandle);
    const propertyType = propertyInfo?.split(' in ')[0];
    const location = propertyInfo?.split(' in ')[1];

    // Room Info (Guests, Bedrooms, Beds, Baths, etc)
    const propertyInfoListHandle = await page.$$(ROOM_INFO_SELECTOR);
    let guestCapacity = null;
    let bedrooms = null;
    let beds = null;
    let bath = null;

    for (let propertyInfoHandle of propertyInfoListHandle) {
      let infoPoint = await page.evaluate((el) => el.innerText, propertyInfoHandle);

      if (infoPoint.search('guest') != -1) {
        guestCapacity = infoPoint;
      } else if (infoPoint.search('bedrooms') != -1) {
        bedrooms = infoPoint;
      } else if (infoPoint.search('beds') != -1) {
        beds = infoPoint;
      } else if (infoPoint.search('bath') != -1) {
        bath = infoPoint;
      }
    }

    // Room Perks
    const perkHandles = await page.$$(PERK_LIST_SELECTOR);
    let roomPerks = [];

    for (let perkHandle of perkHandles) {
      const perkTitle = await page.evaluate((el) => el.querySelector('div._llvyuq')?.textContent, perkHandle);
      const perkBody = await page.evaluate((el) => el.querySelector('div._1hwkgn6')?.textContent, perkHandle);

      roomPerks.push({ perkTitle, perkBody });
    }

    // Rating
    const ratingHandle = await page.$(RATING_SELECTOR);
    const rating = await page.evaluate((el) => el?.innerText, ratingHandle);

    // Review Count
    const reviewCountHandle = await page.$(REVIEW_COUNT_SELECTOR);
    const reviewCount = await page.evaluate((el) => el?.innerText, reviewCountHandle);

    // Highlighted Reviews
    const reviewHandles = await page.$$(REVIEW_LIST_SELECTOR);
    let highlightedReviews = [];

    for (let reviewHandle of reviewHandles) {
      let review = await page.evaluate((el) => {
        return el.querySelector('span.l1h825yc.atm_kd_19r6f69_24z95b.atm_kd_19r6f69_1xbvphn_1oszvuo.dir.dir-ltr')?.textContent;
      }, reviewHandle);

      highlightedReviews.push(review);
    }

    console.log('Getting Description...');

    // Description
    const descriptionHandle = await page.$(DESCRIPTION_SELECTOR);
    const description = await page.evaluate(el => el?.innerText, descriptionHandle);


    console.log("Getting Amenities");

    // Amenities
    await page.click(SHOW_ALL_AMENITIES_SELECTOR);
    await page.waitForSelector(AMENITIES_LIST_SELECTOR, { visible: true });

    const amenitySectionHandles = await page.$$(AMENITIES_LIST_SELECTOR);
    let amenityList = [];
    let missingAmenities = [];

    for (let amenitySectionHandle of amenitySectionHandles) {
      const amenityType = await page.evaluate((el) => {
        return el.querySelector('div._14li9j3g > h2')?.textContent;
      }, amenitySectionHandle);

      const amenities = await page.evaluate((el) => {
        const listItems = el.querySelectorAll('ul._2f5j8p > li');
        let amenities = [];

        for (let li of listItems) {
          amenities.push(li.textContent);
        }

        return amenities;
      }, amenitySectionHandle);

      //amenityList.push({ type: amenityType, items: amenities });
      if (amenityType?.search('Not included') == -1) amenityList.push(...amenities);
      else missingAmenities.push(...amenities);
    }

    await browser.close();

    return {
      success: true,
      title,
      description,
      propertyType,
      roomType: null,
      location,
      guestCapacity: guestCapacity != null ? parseInt(guestCapacity.replace("guests", "").replace(" ", "")) : 0,
      pricing: {
        nightlyRate: nightlyRate != null ? parseFloat(nightlyRate.replace("$", "").replace(" ", "").replace(",", "")) : 0,
        cleaningFee: null,
        dynamicPricing: null,
        minimumStay: null,
      },
      photos: {
        photoCount: null,
        captions: null,
      },
      reviews: {
        reviewCount: reviewCount != null ? parseInt(reviewCount) : null,
        rating: rating != null ? parseFloat(rating) : null,
        recentReviews: highlightedReviews,
      },
      availability: {
        occupancyRate: null,
        seasonality: null,
      },
      amenities: {
        provided: amenityList,
        missing: missingAmenities,
      },
      seo: {
        keywordsInTitle: [],
        keywordsInDescription: [],
      },
    };
  } catch (err) {
    console.log('Failed To Scrape Page');
    console.error(err);
    return { success: false, error: err };
  }
}
