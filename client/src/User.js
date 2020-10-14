class User {
    constructor({ email, name, address }) {
        this.displayUser(email, name, address)
    }

    displayUser(email, name, address) {
        let {street, city} = address;
        this.html = `
        <div class="user">
            <h2>${name}</h2>
            <strong>${email}</strong>
            <dl>
                <dt>City</dt>
                <dd>${city}</dd>
                <dt>Street</dt>
                <dd>${street}</dd>
            </dl>
        </div>
        `;
    }
}