const transactions = require("./transaction");
const express = require("express");
const app = express();

app.get('/', (request, response) => {
    response.send("Hello World!");
});

app.get('/transactions', (request, response) => {
    transactions.send(request.body)
        .then(receipt => {
            response.send(receipt);
        })
        .catch(error => {
            response.send(error);
        })
})

app.listen(8080);