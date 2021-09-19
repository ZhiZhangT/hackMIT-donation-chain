import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Web3 from 'web3'

import LandingPage from "./pages/LandingPage"
import HospitalPage from "./pages/HospitalPage"
import OrganDonationNetwork from './abis/OrganDonationNetwork.json'

function App() {
  const [account, setAccount] = useState(null)
  const [organNetwork, setOrganNetwork] = useState(null)

  const loadWeb3 = async () => {
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

  const loadBlockchainData = async () => {
    const web3 = window.web3
    // Load account
    console.log(web3)
    const accounts = await web3.eth.getAccounts()
    // console.log(accounts)

    setAccount("0x3A4a973A457B2a28917E2FAE26f630CD2064e611")
    const networkId = await web3.eth.net.getId()
    console.log(networkId)
    const networkData = OrganDonationNetwork.networks["5777"]
    if(networkData) {
      setOrganNetwork(new web3.eth.Contract(OrganDonationNetwork.abi, networkData.address))
    }
  }

  useEffect(async ()=>{
    await loadWeb3()
    await loadBlockchainData()
  }, [])

  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/donor">
            <LandingPage organNetwork={organNetwork} account={account}/>
          </Route>
          <Route path="/hospital">
            <HospitalPage organNetwork={organNetwork} account={account}/>
          </Route>
          <Redirect path="/" to="/donor"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App

