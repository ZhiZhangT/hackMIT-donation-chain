import Suspense from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Mesh } from "three"

const Model = props => {
    console.log(props.modelPath)
    const gltf = useLoader(GLTFLoader, props.modelPath);
    for (let children of gltf.scene.children) {
        if (children instanceof Mesh) {
            children.castShadow = true;
        }
    }
    return (
        <primitive castShadow receiveShadow object={gltf.scene} scale={props.scale} rotation={props.rotation} position={props.position}/>
    );
    //0.03, [0, 2, 0]
};

export default Model;
