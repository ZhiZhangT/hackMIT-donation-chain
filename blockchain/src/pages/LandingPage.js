import React, { useState, Suspense, useRef } from "react";
import { Canvas,} from "@react-three/fiber";
import Hero from "../components/Hero/Hero"
import DonorForm from "../components/DonorFormOld"
import OrganSection from "../components/OrganSection"

const LandingPage = props => {
    return(
        <div> 
            <Hero/>
            <DonorForm organNetwork={props.organNetwork}/>
            <OrganSection/>
        </div>
    )
}

export default LandingPage