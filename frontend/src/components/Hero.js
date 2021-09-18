import { Suspense } from "react"

import backgroundImg from "../assets/backgroundImg.jpg"

import classes from "./Hero.module.css"

import Model from "./utilities/Model"
import { Canvas, } from "@react-three/fiber";

const Hero = () => {
    return (
        <div>
            <div className="flex flex-col h-screen">
                <div className={classes.impactTitle}>"The Legends are Real"</div>
                <div className={`${classes.storyText} mb-10 pl-20 text-lg max-w-screen-lg text-left text-gray-300`}>
                    <span>A young engineer went to Istanbul with the promise of a job, to his horror, he was tricked into a surgical procedure and woke with a </span>
                    <span className="text-2xl font-bold">scar and a <span className="text-red-400">missing kidney</span>...</span>
                </div>
                <div className={`${classes.storyText} mb-10 ml-auto text-white pr-20 text-lg inline-block text-left text-gray-300 `}>
                    <span className="text-2xl font-bold text-red-400">Every hour,</span>
                    <br />
                    <span>A kidney transplant is being harvested unethically and illegally</span>
                </div>
                <div className={`${classes.storyText} mb-10 pl-20 text-lg max-w-screen-lg text-left text-gray-300`}>
                    <span className="text-red-400 text-xl font-bold mb-2 inline-block"> Our Mission: </span>
                    <br />
                    <span className="">
                        To develop a <span className="text-red-300 text-xl font-bold">transparent, decentralised and responsible</span> organ donation process using sophisticated <span className="text-xl font-bold text-blue-400"> blockchain technologies </span>
                        in order to eradicate and fight exploitation in the global black market
                    </span>
                </div>
                <div className="self-end -mt-10 text-white mr-20 flex flex-col justify-center overflow-hidden ">
                    <div className={`${classes.pulse} -ml-5 absolute rounded-full overflow-hidden`} style={{ width: "300px", height: "300px" }}></div>
                    <div className="text-white z-10">Orgarde</div>
                    <Canvas colorManagement
                        shadows
                        camera={{ position: [-3, 2, 5], fov: 90 }}
                        style={{ width: "250px", height: "250px", display: "inline-block" }}
                        className="z-0 pl-4"
                    >
                        <Suspense fallback={null}>
                            <Model path={"./shield.gltf"} scale={0.8} rotation={[0, -2.27, 0.15]} position={[-1.1, -0.5, 0]} />
                        </Suspense>
                        <ambientLight intensity={0.5} />
                        <directionalLight
                            intensity={2}
                            castShadow
                            shadow-mapSize-height={80}
                            shadow-mapSize-width={400}
                            position={[3, 50, 2]}
                        />
                    </Canvas>
                    <div className="text-white z-10 -mt-10">Enterprises</div>
                </div>
            </div>
            <div>
                <img className="absolute top-0 left-0 -z-10 w-screen h-screen" src={backgroundImg} alt="background" />
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70 -z-10"></div>
            </div>

        </div>
    )
}

export default Hero