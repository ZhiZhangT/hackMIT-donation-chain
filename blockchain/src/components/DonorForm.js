import { useEffect, useState } from "react"
import FormInput from "./utilities/FormInput"


const DonorForm = props => {
    const [donorName, setDonorName] = useState("")
    const [organType, setOrganType] = useState("")
    const [bloodType, setBloodType] = useState("")
    const [weight, setWeight] = useState(0)

    const [dOrgan, setdOrgan] = useState({
        "liver": true, 
    })

    const updateDOrgan = (e, key) => {
        console.log(e)
        console.log(dOrgan)
        let dOrganCopy = Object.assign({},dOrgan)
        dOrganCopy[key] = !dOrganCopy[key]
        setdOrgan(dOrganCopy)
    }

    // const updateOrgans = idx => {
    //     let dOrganCopy = dOrgan.slice() 
    //     dOrganCopy = 
    //     setdOrgan()
    // }

    const handleSubmit = () => {
        console.log(props.account)
        console.log(props.organNetwork.methods.donateOrgan("tom", 0, 0, 0))
        props.organNetwork.methods.viewDonors().call()
    }
    
    return (
        <form className="flex flex-col w-96 px-5 rounded-xl shadow-lg">
            <FormInput text="Name" placeholder="type name here" callback={setDonorName} value={donorName}/>
            <FormInput text="Organ" placeholder="what organ donation would you like to make?" callback={setOrganType} value={organType}/>
            <FormInput text="Blood type" placeholder="fill in your blood type" callback={setBloodType} value={bloodType}/>
            <FormInput text="Weight (lbs)" type="number" placeholder="fill in your weight here" callback={setWeight} value={weight}/>
            <input type="radio" value="liver" checked={dOrgan["liver"]} onClick={e => updateDOrgan(e, "liver")}/> 
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default DonorForm