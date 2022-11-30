const transactions = require("./transaction");
const bodyParser = require('body-parser')
const express = require("express");
const cors = require('cors')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (request, response) => {
    console.log(JSON.stringify({Hello: "World"}));
    response.send(JSON.stringify({Hello: "World"}));
});

app.post('/transactions', (request, response) => {
    console.log("REQUEST =", request.body);
    transactions.send(request.body.privateKey, 
                        request.body.senderAddress,
                        request.body.receiverAddress,
                        request.body.amount)
        .then(transactionHash => {
            console.log(JSON.stringify({transactionHash: transactionHash}));
            response.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            response.send(JSON.stringify({transactionHash: transactionHash}));
        })
        .catch(error => {
            response.send(error);
        })
})

app.listen(8080);