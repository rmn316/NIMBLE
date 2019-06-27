class KeywordsController {
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