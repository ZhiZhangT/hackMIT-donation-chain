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
import Marketplace from '../abis/Marketplace.json'

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
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      setOrganNetwork(web3.eth.Contract(Marketplace.abi, networkData.address))
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
            <LandingPage organNetwork={organNetwork}/>
          </Route>
          <Route path="/hospital">
            <HospitalPage organNetwork={organNetwork}/>
          </Route>
          <Redirect path="/" to="/donor"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App