import React, { useState } from 'react';
import Web3 from 'web3'
import logo from '../logo.png';
import './App.css';
import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar'
import Main from './Main'

function Main() {
  const [accounts, setAccounts] = useState(0);
  const [account, setAccount] = useState(0);
  const [networkID, setNetworkID] = useState(0);
  const [networkData, setNetworkData] = useState(0);
  const [marketplace, setMarketplace] = useState(0);
  const [organCount, setOrganCount] = useState(0);
  const [organ, setOrgan]=useState(0);
  const [loading, setLoading]=useState(false);
  
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  // Connect web3 to metamask (accesses a node to talk to bc)
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    await setAccounts(web3.eth.getAccounts());
    await setAccount(accounts[0])
    await setNetworkID(web3.eth.net.getId())
    await setNetworkData(Marketplace.networks[networkId])
    if(networkData) {
      await setMarketplace(web3.eth.Contract(Marketplace.abi, networkData.address))
      await organCount(marketplace.methods.organCount().call())
      // Load products
      for (var i = 1; i <= organCount; i++) {
        await setProduct(marketplace.methods.products(i).call())
      }
      setLoading(false)
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

  donateOrgan(dName, price, dOrgan, dBloodType, dWeight) {
    setLoading(true)
    this.state.marketplace.methods.donateOrgan(dName, price, dOrgan, dBloodType, dWeight).send({ account })
    .once('receipt', (receipt) => {
      setLoading(false)
    })
  }

  acceptOrgan(id, price, pOrgan, pBloodtype, pWeight, pLocation, condition) {
    setLoading(true)
    this.state.marketplace.methods.acceptOrgan(id, price, pOrgan, pBloodtype, pWeight, pLocation, condition).send({ account, value: price })
    .once('receipt', (receipt) => {
        setLoading(false)
    })
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <Main
                  products={this.state.products}
                  donateOrgan={this.donateOrgan}
                  acceptOrgan={this.acceptOrgan} />
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
