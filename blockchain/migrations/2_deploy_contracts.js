// deploys the smart contract on the personal blockchain network (Ganache)
const organDonation = artifacts.require("./OrganDonationNetwork");

module.exports = function(deployer) {
  deployer.deploy(organDonation);
};