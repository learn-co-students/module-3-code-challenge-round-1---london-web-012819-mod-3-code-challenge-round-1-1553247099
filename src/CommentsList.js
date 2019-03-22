class CommentList {
    static init() {
        this.el = document.querySelector("#comments")
    }

    static addComment(comment) {
        const newComment = new Comment(comment)
        this.el.appendChild(newComment.el)
    }

    static addComments(comments) {
        comments.forEach(comment => this.addComment(comment))
    }
}

CommentList.init()