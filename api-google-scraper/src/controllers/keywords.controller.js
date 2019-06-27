class keywordsController {
  static upload(request, response) {
    return response.status(200)
      .json({
        message: "processed file"
      })
  }
}

export default keywordsController;