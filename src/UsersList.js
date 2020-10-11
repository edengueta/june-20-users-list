class UsersList {
    constructor() {
        this.init();
        this.listElement = document.createElement('ul');
        this.listElement.classList.add('users-list');
    }

    async init() {
        this.users = await this.fetchUsers();
        this.createList();
    }

    async fetchUsers(){ 
        let response = await fetch('https://jsonplaceholder.typicode.com/users/');
        return await response.json();
    }

    createList() {
        for (let user of this.users) {
            let li = document.createElement('li');
            li.innerHTML = this.createUser(user);
            this.listElement.appendChild(li);
        }
    }

    createUser(userData) {
        let user = new User(userData);
        return user.html;
    }
}