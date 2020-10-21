class SelectedPostService {
    constructor() {

    }

    setSelectedPost(post) {
        this.post = post;
        // fetch comments
        this.callbackFn();
    }

    onPostChanged(callbackFn) {
        // fetch comments
        this.callbackFn = callbackFn;
    }
}

let selectedPostService = new SelectedPostService();