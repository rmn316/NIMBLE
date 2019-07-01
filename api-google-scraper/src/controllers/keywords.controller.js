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
    return response.status(200)
      .json({
        message: "processed file"
      });
  }
}

export default KeywordsController;