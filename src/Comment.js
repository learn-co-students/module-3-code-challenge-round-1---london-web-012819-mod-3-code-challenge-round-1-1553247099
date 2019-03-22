class Comment {

    constructor({ id, content, image_id }) {

        this.id = id
        this.content = content
        this.image_id = image_id

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