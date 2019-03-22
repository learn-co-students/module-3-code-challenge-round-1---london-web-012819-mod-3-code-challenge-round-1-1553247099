class ImageCard {

    static init() {
        this.el = document.querySelector("#image_card")
    }

    static addImage(image) {
        this.url = image.url
        this.comments = image.comments
        this.id = image.id
        this.like_count = image.like_count
        this.image_name = image.name

        this.create()
    }

    static create() {
        this.imageEl = this.el.querySelector("#image")
        this.titleEl = this.el.querySelector("#name")
        this.likesEl = this.el.querySelector("#likes")
        this.likeBtnEl = this.el.querySelector("#like_button")

        this.imageEl.src = this.url
        this.titleEl.innerText = this.image_name
        this.likesEl.innerText = this.like_count

        CommentList.addComments(this.comments)

        this.addLikeEvent()
    }

    static addLikeEvent() {
        this.likeBtnEl.addEventListener("click", () => this.handleLike())
    }

    static handleLike() {
        this.like_count++
            API.updateLike(this.id)
            .then(() => this.likesEl.innerText = this.like_count)
    }

}

ImageCard.init()