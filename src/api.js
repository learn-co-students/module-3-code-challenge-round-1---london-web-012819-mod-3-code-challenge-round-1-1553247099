class API {
  static init() {
    this.imageId = 2243
    this.imageUrl =  `https://randopic.herokuapp.com/images/${this.imageId}`
    this.likeUrl = `https://randopic.herokuapp.com/likes/${this.imageId}`
    this.commentsURL = `https://randopic.herokuapp.com/comments/${this.imageId}`
  }

  static getData() {
    return this.get(this.imageUrl)
  }

  static postData(data) {
    return this.post(this.imageUrl, data)
  }

  static get(url) {
    return fetch(url).then(resp => resp.json())
  }

    static post(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      }).then(resp => resp.json())
    }

}



API.init()

// let imageId = 2243 //Enter the id from the fetched image here
//
// const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
//
// const likeURL = `https://randopic.herokuapp.com/likes/`
//
// const commentsURL = `https://randopic.herokuapp.com/comments/`
