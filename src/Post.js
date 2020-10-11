class Post {
    constructor({title, body}) {
        this.displayPost(title, body)
    }

    displayPost(title, body) {
        this.html = `
        <section>
            <h3>${title}</h3>
            <p>${body}</p>
        </section>
        `
    }
}