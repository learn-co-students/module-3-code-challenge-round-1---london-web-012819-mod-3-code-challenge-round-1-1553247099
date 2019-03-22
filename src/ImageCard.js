class ImageCard {

    static init() {
        this.el = document.querySelector("#image_card")
    }

    static addImage({ url, comments, id, like_count, name }) {

        this.url = url
        this.comments = comments
        this.id = id
        this.like_count = like_count
        this.image_name = name

        this.create()
    }

    static create() {
        this.imageEl = this.el.querySelector("#image")
        this.titleEl = this.el.querySelector("#name")
        this.likesEl = this.el.querySelector("#likes")
        this.likeBtnEl = this.el.querySelector("#like_button")

        const { url, image_name, like_count, comments } = this

        this.imageEl.src = url
        this.titleEl.innerText = image_name
        this.likesEl.innerText = like_count

        CommentList.addComments(comments)

        this.addLikeEvent()
    }

    static addLikeEvent() {
        this.likeBtnEl.addEventListener("click", () => this.handleLike())
    }

    static handleLike() {
        this.like_count++
            API.updateLike()
            .then(() => this.likesEl.innerText = this.like_count)
    }

}

ImageCard.init()