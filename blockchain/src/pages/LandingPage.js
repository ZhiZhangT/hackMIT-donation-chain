import React, { useState, Suspense, useRef } from "react";
import { Canvas,} from "@react-three/fiber";
import Hero from "../components/Hero/Hero"
import DonorForm from "../components/DonorForm"
import OrganSection from "../components/OrganSection"

const LandingPage = () => {
    return(
        <div> 
            <Hero/>
            {/* <DonorForm/>
            <OrganSection/> */}
        </div>
    )
}

export default LandingPage