class CommentForm {

    static init() {
        this.el = document.querySelector("#comment_form")
        this.addSubmitEvent()
    }

    static addSubmitEvent() {
        this.el.addEventListener("submit", event => this.handleSubmit(event))
    }

    static handleSubmit(event) {
        event.preventDefault()

        const newContent = event.target.comment.value

        const newComment = {
            image_id: API.imageId,
            content: newContent
        }
        API.createComment(newComment)
            .then(comment => CommentList.addComment(comment))
    }
}

CommentForm.init()