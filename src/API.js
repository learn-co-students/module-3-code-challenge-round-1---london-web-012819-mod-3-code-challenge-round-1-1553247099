class API {
    static init() {
        this.imageId = 2242
        this.baseUrl = "https://randopic.herokuapp.com"
        this.imageUrl = this.baseUrl + `/images/${this.imageId}`
        this.likeURL = this.baseUrl + "/likes/"
        this.commentsURL = this.baseUrl + "/comments/"
    }

    static getImage() {
        return fetch(this.imageUrl)
            .then(response => response.json())
    }

    static updateLike(imageId) {

        const body = { image_id: imageId }

        const params = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        return fetch(this.likeURL, params)
            .then(response => response.json())
    }

    static deleteComment(commentId) {
        const params = { method: "DELETE" }
        return fetch(this.commentsURL + `/${commentId}`, params)
            .then(response => response.json())
    }

    static createComment(comment) {
        const params = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        }

        return fetch(this.commentsURL, params)
            .then(response => response.json())
    }

}

API.init()