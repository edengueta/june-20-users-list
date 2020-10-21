class CommentsList {
    constructor() {

        this.element = document.createElement('ul');
        this.element.classList.add('comments-list');
        selectedPostService.onPostChanged(() => this.init());
    }

    async init() {
        this.element.innerHTML = '';
        this.comments = await this.fetchComments();
        this.createList();
    }

    async fetchComments() {
        let post = selectedPostService.post;
        let response = await fetch(`${serverURL}/posts/${post.id}/comments`);
        return response.json();
    }

    createList() {
        this.comments.forEach(comment => {
            let li = this.createComments(comment);
            this.element.appendChild(li)
        });
    }


    createComments(commentData) {
        let comment = new Comment(commentData);
        let li = document.createElement('li');
        li.addEventListener('click', () => this.onPostSelected(postData));
        li.innerHTML = comment.html;
        return li;
    }
}