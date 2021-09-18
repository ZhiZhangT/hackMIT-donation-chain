import { useState } from "react"

import FormInput from './utilities/FormInput'

const DonorForm = props => {
    const [name, setName] = useState("")
    const [bloodType, setBloodType] = useState("")
    const [streetAddress, setStreetAddress] = useState("")
    
    return (
        <form className="flex flex-col w-96 px-5 rounded-xl shadow-lg">
            <FormInput text="Name" placeholder="type name here" callback={setName} value={name}/>
            <FormInput text="Blood type" placeholder="fill in your blood type" callback={setBloodType} value={bloodType}/>
            <FormInput text="Street address" placeholder="fill in your street address" callback={setStreetAddress} value={streetAddress}/>
            
            <label>
                Organ
                <select name="organ">
                    <option value="liver">Liver</option>
                    <option value="kidney">Kidney</option>
                    <option value="pancreas">Pancreas</option>
                    <option value="lung">Lung</option>
                    <option value="intestines">Intestines</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default DonorForm