class Comment {
    constructor(comment) {
        this.id = comment.id
        this.content = comment.content
        this.image_id = comment.image_id

        this.el = document.createElement("li")
        this.create()
    }

    create() {
        this.el.innerText = this.content
        this.deleteBtn = document.createElement("button")
        this.deleteBtn.innerText = "X"
        this.el.appendChild(this.deleteBtn)

        this.addDeleteEvent()
    }

    addDeleteEvent() {
        this.deleteBtn.addEventListener("click", () => this.handleDelete())
    }

    handleDelete() {
        API.deleteComment(this.id)
            .then(() => this.el.remove())
    }
}