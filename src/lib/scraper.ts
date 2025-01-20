import { error } from '@sveltejs/kit';

export default function scrapeListing(url: string): string {
  const airbnbRegex = /^https?:\/\/(www\.)?airbnb\.[a-z]+\/.+$/;

  if (!airbnbRegex.test(url)) {
    throw error(400, 'Invalid Airbnb URL');
  }

  return url;
}
