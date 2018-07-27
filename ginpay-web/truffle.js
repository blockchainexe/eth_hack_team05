const HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = "your mnemonic" //change
var accessToken = "your infura token" //change
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://localhost:8545", 1);
      }
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      network_id: 4,
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/" + accessToken, 1);
      },
      gas: 4612388 // Gas limit used for deploys
    }
  }
};

