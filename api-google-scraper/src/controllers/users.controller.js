class UsersController {
  /**
   * @param request
   * @param response
   * @returns {JSON} Response as json object.
   */
  static login = (request, response)  => {
    return response.status(200)
      .json({
        message: "success"
      });
  }
}

export default UsersController;
