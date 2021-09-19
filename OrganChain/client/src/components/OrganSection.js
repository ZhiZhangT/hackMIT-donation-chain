
import FloatingOrganCanvas from "./utilities/FloatingOrganCanvas"

const OrganSection = props => {
    return (
        <div className="bg-red-300 flex items-center">
            <div style={{fontFamily:"Fondamento", fontSize:"60px"}} className=" pl-20 pr-10 inline-block text-4xl -mr-10">OrganNet</div>
            <FloatingOrganCanvas modelPath={"./liver.gltf"} scale={0.03} position={[0,2,0]}/>
            <FloatingOrganCanvas modelPath={"./kidney.gltf"} scale={1} position={[0,1.5,0]}/>
            <FloatingOrganCanvas modelPath={"./intestines.gltf"} scale={0.15} rotation={[0,0,-1.3]} position={[0,1.5,0]}/>
            <FloatingOrganCanvas modelPath={"./pancreas.gltf"} scale={1.0} rotation={[0,0,0]} position={[0,1.5,0]}/>
            <FloatingOrganCanvas modelPath={"./lungs.gltf"} scale={1.2} rotation={[0,0,0]} position={[0,0,0]}/>
        </div>
    )
}

export default OrganSection