# Organ Donation Network Guide

## Getting Started
1. Installing personal Blockchain network: [Ganache UI ](https://www.trufflesuite.com/ganache)
2. Installing framework to deploy smart contracts on network: [Truffle Framework](https://www.trufflesuite.com/docs/truffle/getting-started/installation) using npm
3. Installing project dependencies: cd into _hackMIT-donation-chain_ directory and run `npm install`

## Contracts Directory
* Will contain all the .sol scripts for our smart contracts.
* OrganDonation.sol is stored here
* After creating/editing a .sol script, we have to compile it in Truffle by running: `truffle compile` in Terminal

## Migrations Directory
* Will contain the .js scripts used for migration
* Migration: To deploy a smart contract to the Blockchain, we must update the state of the blockchain with our smart contract, _migrating_ our smart contract as a block on to the chain, similar to a database migration.
* The files inside here are numbered, so Truffle knows which order to execute them in.
* To run the migration scripts, we run `truffle migrate` in the terminal

## Tests Directory
* Tests should be written to ensure minimal bugs because:
  1. All code on Ethereum Blockchain is immutable: cannot change. If a bug exists we must disable the contract and deploy a new copy, which will not have the same state as the old one.
  2. Deploying new contracts costs gas and Ether.
* Tests can be written using the [Mocha Testing Framework](https://mochajs.org/) and [Chai assertion library](http://www.chaijs.com/), which are bundled with the Truffle framework.
* Tests are written in .js files to simulate client side interaction with the smart contract.
* To run these test scripts, run `truffle test`

## Others
* _node_modules_: All our node modules live here.
* _package.json_ : Contains info about our project/app and dependencies used.
* _package-lock.json_ : Like _package.json_ but with more info about our dependencies.
* _truffle-config.js_ : main configuration file for our project, includes things like network configurations when deploying on to the Blockchain.

## Interacting with our Smart Contracts
1. Open the Truffle console by running `truffle console`
2. Assign variable to the smart contract's deployed state: `{variable name} = await {name of our contract}.deployed` i.e. `organDonation = OrganDonationNetwork.deployed()`
3. We can then access properties of our smart contract through this variable. i.e. `organDonation.address` will return the address that our contract was deployed to on the Blockchain, `patients_array = await organDonation.patients` => `patients_array` will return the array of all patients and their information.

