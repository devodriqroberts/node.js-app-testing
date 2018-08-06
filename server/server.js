const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send({
        user1: "Devodriq",
        user2: "Myself",
        user3: "AndI"
    });
});


app.listen(3000);
module.exports.app = app;