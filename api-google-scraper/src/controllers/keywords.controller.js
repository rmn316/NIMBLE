import GoogleScraper from '../service/google-scraper.service';

class KeywordsController {

  static index = (request, response) => {

    const data = [
      {id: 1, keyword: "test", ad_words:3, links: 333, results: 122020202},
      {id: 2, keyword: "test 2", ad_words:3, links: 333, results: 122020202}
    ]

    return response.status(200)
      .json(data);
  }

  /**
   * @param request
   * @param response
   * @returns {JSON} Response as json object.
   */
  static upload = (request, response)  => {

    // needs to go inside a loop.
    GoogleScraper.scrape('digital marketing').then((result) => {
      return response.status(200).json({"body": result});
    });
  }
}

export default KeywordsController;