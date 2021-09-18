import logo from './logo.svg';
import './App.css';
import React, { useState, Suspense, useRef } from "react";
import { Canvas, } from "@react-three/fiber";

import FloatingLiver from './components/FloatingLiver'
import FloatingKidney from './components/FloatingKidney'
import FloatingLungs from './components/FloatingLungs'
import { RectAreaLight } from 'three';

import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <div className="App" >
      <LandingPage/>
      <div className="bg-red-300 flex items-center">
        <div className="inline-block text-4xl -mr-10">Organ Chain</div>
        <Canvas
          colorManagement
          shadows
          camera={{ position: [-3, 2, 5], fov: 90 }}
          style={{ width: "200px", height: "200px", display: "inline-block" }}
        >
          <ambientLight intensity={0.1} />
          <directionalLight
            intensity={2}
            castShadow
            shadow-mapSize-height={80}
            shadow-mapSize-width={400}
            position={[3, 50, 2]}
          />
          <ambientLight intensity={0.2} />
          <directionalLight
            intensity={0.5}
            castShadow
            shadow-mapSize-height={80}
            shadow-mapSize-width={400}
            position={[1, 0, 2]}
          />
          <FloatingLiver />
        </Canvas>
        <Canvas
          colorManagement
          shadows
          camera={{ position: [-3, 2, 5], fov: 90 }}
          style={{ width: "200px", height: "200px", display: "inline-block" }}
        >
          <ambientLight intensity={0.1} />
          <directionalLight
            intensity={2}
            castShadow
            shadow-mapSize-height={80}
            shadow-mapSize-width={400}
            position={[3, 50, 2]}
          />
          <ambientLight intensity={0.2} />
          <directionalLight
            intensity={0.5}
            castShadow
            shadow-mapSize-height={80}
            shadow-mapSize-width={400}
            position={[1, 0, 2]}
          />
          <FloatingKidney/>
        </Canvas>
        <Canvas
          colorManagement
          shadows
          camera={{ position: [-3, 2, 5], fov: 90 }}
          style={{ width: "200px", height: "200px", display: "inline-block" }}
        >
          <ambientLight intensity={0.1} />
          <directionalLight
            intensity={2}
            castShadow
            shadow-mapSize-height={80}
            shadow-mapSize-width={400}
            position={[3, 50, 2]}
          />
          <ambientLight intensity={0.2} />
          <directionalLight
            intensity={0.5}
            castShadow
            shadow-mapSize-height={80}
            shadow-mapSize-width={400}
            position={[1, 0, 2]}
          />
          <FloatingLungs/>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
