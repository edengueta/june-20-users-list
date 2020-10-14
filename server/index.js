const fs = require('fs');
const express = require('express');
const app = express();
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
app.use(express.static('./client'));
app.set("json spaces", 2);
app.get('/', (req, res) => {
    res.send(
        fs.readFileSync('./client/index.html', { encoding: 'utf-8' })
    );
});


app.use(express.json());
app.use("/users", usersRoute);
app.use("/posts", postsRoute);


app.listen('8080');