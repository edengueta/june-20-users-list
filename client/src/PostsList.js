class PostsList {
    constructor() {

        this.element = document.createElement('ul');
        this.element.classList.add('posts-list');
        selectedUserService.onUserChanged(() => this.init());
    }

    async init() {
        this.element.innerHTML = '';
        this.posts = await this.fetchPosts();
        this.createList();
    }

    async fetchPosts() {
        let user = selectedUserService.user;
        let response = await fetch(`${serverURL}/users/${user.id}/posts`);
        return response.json();
    }

    createList() {
        this.posts.forEach(post => {
            let li = this.createPost(post);
            this.element.appendChild(li)
        });
    }

    onPostSelected(post) {
        selectedPostService.setSelectedPost(post);
    }

    createPost(postData) {
        let post = new Post(postData);
        let li = document.createElement('li');
        li.innerHTML = post.html;
        return li;
    }
}