class API {

    static init() {
        this.imageId = 2242
        this.baseUrl = "https://randopic.herokuapp.com"
        this.imageUrl = this.baseUrl + `/images/${this.imageId}`
        this.likeURL = this.baseUrl + "/likes/"
        this.commentsURL = this.baseUrl + "/comments/"
    }

    static getImage() {
        return this.get(this.imageUrl)
    }

    static updateLike() {
        const body = { image_id: API.imageId }
        return this.post(this.likeURL, body)
    }

    static deleteComment(commentId) {
        return this.delete(this.commentsURL + `/${commentId}`)
    }

    static createComment(comment) {
        return this.post(this.commentsURL, comment)
    }

    // GET, POST, DELETE requests logic:

    static get(url) {
        return fetch(url)
            .then(response => response.json())
    }

    static post(url, body) {
        const params = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        return fetch(url, params)
            .then(response => response.json())
    }

    static delete(url) {
        return fetch(url, {
                method: "DELETE"
            })
            .then(response => response.json())
    }

}

API.init()