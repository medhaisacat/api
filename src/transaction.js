// Imports
const thorify = require("thorify").thorify;
const Web3 = require("web3");
const constants = require("./constants");

// Instantiate web3 with thorify
var instantiate = function (endpoint) {
  return thorify(new Web3(), constants.nodeEndpoints.public);
}

var send = async function(endpoint, privateKey, senderAddress, receiverAddress, amount) {

var web3 = instantiate(endpoint); 

  return new Promise((resolve, reject) => {
    // Initiate the web3 instance with private key of wallet
    web3.eth.accounts.wallet.add(privateKey)
    
    web3.eth.getBalance(senderAddress).then(result => {
      console.log(result)
    })
    web3.eth.sendTransaction({
        from: senderAddress,
        to: receiverAddress,
        value: web3.utils.toBN(amount)
    })
    .on("sending", obj => {
      console.log("Sending", obj);
    })
    .on("sent", obj => {
      console.log("Sent", obj);
    })
    .on("transactionHash", obj => {
      console.log("transactionHash", obj);
      resolve(obj);
    })
    .on("receipt", obj => {
      console.log("receipt", obj);
    })
    .on("confirmation", obj => {
      console.log("confirmation", obj);
    })
    .on("error", error => {
      console.log("Error", error);
      reject(error);
    })
  })
  
}


module.exports = {
  send
}