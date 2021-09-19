import { useEffect, useState } from "react"
import FormInput from "./utilities/FormInput"
import axios from "axios"



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

    async function makePostRequest() {
        let res = await axios.post('https://organchain.herokuapp.com/donors', null, {
        params: { 
            donor_details: `{name:"${donorName}",organ:"${organType}", bloodtype:"${bloodType}"}`
        }} );
    
        let data = res.data;
        console.log(data);
    }
    const [success, setSuccess] = useState(false)

    const handleSubmit = async () => {
        
        makePostRequest();
        console.log(props.account)
        // console.log(props.organNetwork.methods.donateOrgan("tom", 0, 0, 0))
        let test_hex_string = window.web3.utils.asciiToHex('hi')
        console.log(test_hex_string)
        let res = await props.organNetwork.methods.get().send({from:props.account})
        console.log(res)
        setSuccess(true)
    }
    
    return (
        <form className="flex flex-col w-96 px-5 py-10 rounded-xl shadow-lg">
            <FormInput text="Name" placeholder="type name here" callback={setDonorName} value={donorName}/>
            <FormInput text="Organ" placeholder="what organ donation would you like to make?" callback={setOrganType} value={organType}/>
            <FormInput text="Blood type" placeholder="fill in your blood type" callback={setBloodType} value={bloodType}/>
            <FormInput text="Weight (lbs)" type="number" placeholder="fill in your weight here" callback={setWeight} value={weight}/>
            <button className="mx-2 px-5 py-2 rounded-lg hover:bg-green-600 bg-green-400" type="button" onClick={handleSubmit}>Submit</button>
            { success ? <div className="text-green-400">Success</div>: ""}
        </form>
    )
}

export default DonorForm