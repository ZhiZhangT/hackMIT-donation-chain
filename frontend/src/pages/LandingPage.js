import React, { useState, Suspense, useRef } from "react";
import { Canvas,} from "@react-three/fiber";
import Hero from "../components/Hero"
import DonorForm from "../components/DonorForm"

const LandingPage = () => {
    return(
        <div> 
            <Hero/>
            <DonorForm/>
        </div>
    )
}

export default LandingPage