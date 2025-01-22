import { error } from '@sveltejs/kit';
import puppeteer from "puppeteer";

export default async function scrapeListing(url: string): Promise<string> {
  const airbnbRegex = /^https?:\/\/(www\.)?airbnb\.[a-z]+\/.+$/;

  if (!airbnbRegex.test(url)) {
    throw error(400, 'Invalid Airbnb URL');
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log("Waiting For Full Page To Load ...");
  await page.goto(url);
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // For now just returning the full HTML code
  const fullHTML = await page.evaluate(() => {
    const fullPage = document.querySelector("*");
    return fullPage?.outerHTML != null ? fullPage.outerHTML : "";
  });

  await browser.close();

  return fullHTML;
}
