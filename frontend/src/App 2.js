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
        const product = await marketplace.methods.products(i).call()
        this.setState({
          products: [...this.state.products, product]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }
  
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      products: [],
      loading: true
    }

    this.donateOrgan = this.donateOrgan.bind(this)
    this.acceptOrgan = this.acceptOrgan.bind(this)
  }

  donateOrgan(dName, price, dOrgan, dBloodType, dWeight) {
    this.setState({ loading: true })
    this.state.marketplace.methods.donateOrgan(dName, price, dOrgan, dBloodType, dWeight).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  acceptOrgan(id, price, pOrgan, pBloodtype, pWeight, pLocation, condition) {
    this.setState({ loading: true })
    this.state.marketplace.methods.acceptOrgan(id, price, pOrgan, pBloodtype, pWeight, pLocation, condition).send({ from: this.state.account, value: price })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
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
