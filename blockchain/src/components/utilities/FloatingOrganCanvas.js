import { Canvas } from "@react-three/fiber"
import FloatingOrgan from "./FloatingOrgan"

const FloatingOrganCanvas = props => {
    console.log(props.modelPath)
    return (
        <Canvas
            colorManagement
            shadows
            camera={{ position: [-3, 2, 5], fov: 90 }}
            style={{ width: "200px", height: "200px", display: "inline-block" }}
        >
            <ambientLight intensity={0.2} />
            <directionalLight
                intensity={2}
                castShadow
                shadow-mapSize-height={80}
                shadow-mapSize-width={400}
                position={[3, 50, 2]}
            />
            <directionalLight
                intensity={0.5}
                castShadow
                shadow-mapSize-height={80}
                shadow-mapSize-width={400}
                position={[1, 0, 2]}
            />
            <FloatingOrgan 
                modelPath={props.modelPath} 
                scale={props.scale} 
                position={props.position} 
                rotation={props.rotation}
            />
        </Canvas>
    )
}

export default FloatingOrganCanvas