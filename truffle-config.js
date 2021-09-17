module.exports = {
  networks: {
    development: {
        // check Ganache's Server Settings and fill accordingly
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
