import logo from './logo.svg';
import './App.css';
import React, { useState, Suspense, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Canvas, } from "@react-three/fiber";


import { RectAreaLight } from 'three';

import LandingPage from "./pages/LandingPage"
import HospitalPage from "./pages/HospitalPage"

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/donor">
            <LandingPage/>
          </Route>
          <Route path="/hospital">
            <HospitalPage/>
          </Route>
          <Redirect path="/" to="/donor"/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
