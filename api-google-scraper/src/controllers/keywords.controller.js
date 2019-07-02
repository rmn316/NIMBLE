import * as db from '../models/index';
import GoogleScraper from '../service/google-scraper.service';

class KeywordsController {

  static index = (request, response) => {

    db.Keyword.findAll({
        order: [
          ['keyword', 'ASC']
        ]
    })
      .then((data) => {
        return response.status(200).json(data)
      })
      .catch(() => {
        return response.status(400).json({message: "Unable to fetch keywords"});
      })
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
