class Comment {
    constructor({ name, email, body }) {
        this.displayComment(name, email, body)
    }

    displayComment(name, email, body) {
        this.html = `
        <section class="comment">
            <h5>${name}</h5>
            <h5>${email}</h5>
            <p>${body}</p>
        </section>
        `
    }
}