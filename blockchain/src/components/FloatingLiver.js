import React, { useState, Suspense, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";
import { Plane } from "@react-three/drei";

import Model from "./utilities/Model"

const FloatingLiver = _ => {
    const myMesh = React.useRef();
    const [active, setActive] = useState(false);

    const { scale } = useSpring({
        scale: active ? 1.5 : 1,
        config: config.wobbly
    });

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.y = a;
    });

    return (
        <group>
            <animated.mesh
                scale={scale}
                onClick={() => setActive(!active)}
                ref={myMesh}
                castShadow
            >
                <Suspense fallback={null}>
                    <Model path={"./liver.gltf"} scale={0.03} position={[0,2,0]}/>
                </Suspense>
            </animated.mesh>
            <Plane
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -2, 0]}
                args={[5, 5]}
            >
                <meshStandardMaterial attach="material" color="transparent" transparent={true} />
            </Plane>
        </group>
    );
}

export default FloatingLiver
