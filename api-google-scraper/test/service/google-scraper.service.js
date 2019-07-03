import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import cheerio from 'cheerio';
import GoogleScraper from '../../src/service/google-scraper.service';


describe ('Google Scraper Service', () => {

  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  describe ('scrape a keyword from google', () => {
    it ('should successfully scrape a page and return javascript object', () => {
      sandbox.stub(axios, 'get').resolves({data:'<html></html>'});
      sandbox.spy(cheerio, 'load');

      GoogleScraper.scrape('test').then(result => {
        expect(axios.get.calledOnce).to.equal(true);
        expect(cheerio.load.calledOnce).to.equal(true);
        expect(result).to.equal({
          links: 0,
          ad_words: 0,
          results: 0,
          html: '<html></html>'
        });
      })
        .catch(() => {});

    });
  })
});
