import fs from 'fs';
import csv from 'fast-csv';
import db from '../models/index';
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
    const keywords = [];

    const parser = new Promise((resolve, reject) => {
      csv.parseFile(request.file.path)
        .on('data', (data) => {
          data.forEach((item) => {
            keywords.push(item.trim());
          });
        })
        .on('end', () => {
          fs.unlinkSync(request.file.path);
          resolve(keywords);
        });
    });

    parser.then(() => {
      keywords.forEach((keyword) => {
        setTimeout(() => {
          // scrape keyword
          GoogleScraper.scrape('digital marketing').then((result) => {
            // add the scrape result to the db.
            db.Keyword.create({
              title: result.keyword,
              adWords: result.ad_words,
              links: result.links,
              results: result.results,
              source: result.html
            });
          });

          console.log(keyword)
        }, 30000); // wait 3 seconds per iteration
      });
    });

    return parser.then(() => {
      response.status(200).json({
        message: "File successfully uploaded",
        results: keywords
      });
    });

  }
}

export default KeywordsController;
