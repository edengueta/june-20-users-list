class PostsList {
    constructor() {
        this.init();
        this.element = document.createElement('ul');
        this.element.classList.add('posts-list');
    }

    async init() {
        this.posts = await this.fetchPosts();
        this.createList();
    }

    async fetchPosts(){
        let response = await fetch('https://jsonplaceholder.typicode.com/users/8/posts');
        return response.json();
    }

    createList() {
        this.posts.forEach(post => {
            this.element.appendChild(this.createPost(post))
        });
    }

    createPost(postData) {
        let post = new Post(postData);
        let li = document.createElement('li');
        li.innerHTML = post.html;
        return li;
    }
}