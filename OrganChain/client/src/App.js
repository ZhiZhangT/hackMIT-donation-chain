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
import OrganDonation from './contracts/OrganDonation.json'
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
    console.log(accounts)
    // console.log(accounts)

    setAccount(accounts[0])
    let networkId = await web3.eth.net.getId()
    console.log(OrganDonation.networks["5777"].address)
    networkId = 5777
    setOrganNetwork(new web3.eth.Contract(OrganDonation.abi, OrganDonation.networks[networkId] && OrganDonation.networks[networkId].address))
   
  }

  useEffect(async ()=>{
    await loadWeb3()
    await loadBlockchainData()
  }, [])

  useEffect(()=>{
    console.log(organNetwork)
    try{
      var voteCast = organNetwork.events.LogDonor();
      console.log("HIIII", voteCast)
      voteCast.watch(function(err, result) {console.log(result)}); 
    }catch{
      console.log('failed')
    }
  }, [organNetwork] )

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

