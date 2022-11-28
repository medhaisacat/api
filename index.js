const transactions = require("./transaction");
const bodyParser = require('body-parser')
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send("Hello World!");
});

app.get('/transactions', (request, response) => {
    console.log("REQUEST =", request.body);
    transactions.send(request.body.privateKey, 
                        request.body.senderAddress,
                        request.body.receiverAddress,
                        request.body.amount)
        .then(receipt => {
            response.send(receipt);
        })
        .catch(error => {
            response.send(error);
        })
})

app.listen(8080);