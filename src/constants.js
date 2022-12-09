/**
 * This file stores all constants used in the transaction.js file 
 */

// Node endpoints
const nodeEndpoints = {
    // IPEP where test node is deployed
    self: "http://34.125.171.95:8669",

    // Public node synced woth test network
    public: "https://testnet02.vechain.de.blockorder.net"
}

// Test constants
const test = {
    privateKey: "0x1e8ba9c52c912b57c16a0afdbae4abe63857b5636dce4b65195867bc3e82e65a",
    senderAddress: "0x1668338971Bf0293645Fa46b7F5b34516E0D855C",
    receiverAddress: "0x2D0dbAC1d8537929Df65a329166579eF56e0dfB3",
    amount: 100
}

module.exports = { 
    nodeEndpoints, 
    test 
}