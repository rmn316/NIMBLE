import "babel-polyfill"
import axios from 'axios';
import cheerio from 'cheerio';

class GoogleScraper {

  static async scrape (keyword) {
    const result = await axios.get('https://www.google.com/search?q=' + keyword + '&num=100');

    const $ = cheerio.load(result.data, {
      xmlMode: true
    });

    const links = [];
    const adWords = [];
    $("body").find("a").each((index, element) => {
      let str = $(element).attr('href');
      if (str.includes('/aclk?')) {
        adWords.push({link: element});
      }
      links.push({link: element});
    });

    return {
      links: links.length,
      ad_words: adWords.length,
      results: 0, // currently not found in document.
      html: result.data
    };
  }
}

export default GoogleScraperService;
