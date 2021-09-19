import { useEffect, useState } from "react"


const DonorForm = props => {
    const [donorName, setDonorName] = useState("")
    const [organType, setOrganType] = useState("")
    const [bloodType, setBloodType] = useState("")
    const [weight, setWeight] = useState(0)

    const handleSubmit = () => {
        props.organNetwork.methods.donateOrgan(donorName,price,organType,bloodType,weight).send({ from: this.state.account})
    }
    
    return (
        <form className="flex flex-col w-96 px-5 rounded-xl shadow-lg">
            <FormInput text="Name" placeholder="type name here" callback={setDonorName} value={donorName}/>
            <FormInput text="Organ" placeholder="what organ donation would you like to make?" callback={setOrganType} value={organType}/>
            <FormInput text="Blood type" placeholder="fill in your blood type" callback={setBloodType} value={bloodType}/>
            <FormInput text="Weight (lbs)" type="number" placeholder="fill in your weight here" callback={setWeight} value={weight}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}