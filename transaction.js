const thorify = require("thorify").thorify;
const Web3 = require("web3");

const web3 = thorify(new Web3(), "http://13.230.221.53:8669");

web3.eth.getBlock("latest").then(res => console.log(res)).catch(error => {console.log(error)});


