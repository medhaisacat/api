const constants = require("./constants")
const transactions = require("./transaction");
const bodyParser = require('body-parser');
const express = require("express");
const cors = require('cors')
const app = express();


// Get server endpoint where veChain Thor node is hosted
var getServerEndpoint = function () {
    switch(process.argv[2]) {
        case 'self': 
            return constants.nodeEndpoints.self;
        case 'public':
            return constants.nodeEndpoints.public;
        default: 
            // Setting public end point as default for availability
            return constants.nodeEndpoints.public;
    }
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (request, response) => {
    console.log(JSON.stringify({Hello: "World"}));
    response.send(JSON.stringify({Hello: "World"}));
});

app.post('/transactions', (request, response) => {
    transactions.send(getServerEndpoint(),
                        request.body.privateKey, 
                        request.body.senderAddress,
                        request.body.receiverAddress,
                        request.body.amount)
        .then(transactionHash => {
            console.log(JSON.stringify({transactionHash: transactionHash}));
            response.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            response.set('Content-Type', 'application/json');
            response.send(JSON.stringify({transactionHash: transactionHash}));
        })
        .catch(error => {
            response.send(error);
        })
})

app.listen(8080);

// For testing
module.exports = app;