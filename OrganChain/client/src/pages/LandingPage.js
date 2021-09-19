import React, { useState, Suspense, useRef } from "react";
import { Canvas,} from "@react-three/fiber";
import Hero from "../components/Hero/Hero"
import DonorForm from "../components/DonorForm"
import OrganSection from "../components/OrganSection"
import MatchesSection from "../components/MatchesSection"

const LandingPage = props => {
    return(
        <div> 
            <Hero/>
            <OrganSection/>
            <div className="p-10 flex flex-row justify-center">
              <div className="pr-10">
                <div style={{fontFamily:"Fondamento", fontSize:"40px"}}>Be a Donor today</div>
                <div style={{fontFamily:"Fondamento", fontSize:"20px"}}>Save a life</div>
              </div> 
              <DonorForm organNetwork={props.organNetwork} account={props.account}/>
            </div>
            <MatchesSection/>
        </div>
    )
}

export default LandingPage