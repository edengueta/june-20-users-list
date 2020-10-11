class UsersApp {
    constructor() {
        this.element = document.createElement('main');
        this.element.classList.add('main-app');
        this.createList();
        this.createPosts();
    }

    createList() {
        let usersList = new UsersList();
        this.element.appendChild(usersList.listElement);
        document.body.appendChild(this.element);
    }

    createPosts() {
        let postsElement = document.createElement('article');
        postsElement.innerHTML = "hello world";
        postsElement.classList.add('posts-list');
        this.element.appendChild(postsElement);
    }
}