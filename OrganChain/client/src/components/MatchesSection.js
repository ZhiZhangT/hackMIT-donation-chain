const Pairs = props => { 
    return (
        <div className="rounded-lg flex flex-row p-5 bg-pink-100 shadow-xl w-full justify-evenly mb-5">
            <div className="flex flex-row">
                <div className="mr-5 text-xl">{props.patient.Name}</div>
                <div className="mr-5 text-xl">{props.patient.Organ}</div>
                <div className="mr-5 text-xl">{props.patient.Bloodtype}</div>
            </div>
            <div className="flex flex-row">
                <div className="mr-5 text-xl">{props.donor.Name}</div>
                <div className="mr-5 text-xl">{props.donor.Organ}</div>
                <div className="mr-5 text-xl">{props.donor.Bloodtype}</div>
            </div>
            <button onClick={props.handleClick} className="absolute right-12 flex-0 item-end bg-green-200 px-5 -mt-2 rounded-md shadow-lg py-2 hover:bg-green-400">Verify</button>
        </div>
    )
}


const MatchesSection = props => {
    let matches = [{
        donor: {
            "Name": "Thomas", 
            "Organ": "kidney",
            "Bloodtype":  "B-",
        },
        patient: {
            "Name": "Catherine", 
            "Organ": "kidney",
            "Bloodtype":  "B-",
        }
    },
    {
        donor: {
            "Name": "Thomas", 
            "Organ": "kidney",
            "Bloodtype":  "B-",
        },
        patient: {
            "Name": "Catherine", 
            "Organ": "kidney",
            "Bloodtype":  "B-",
        }
    },
    {
        donor: {
            "Name": "Thomas", 
            "Organ": "kidney",
            "Bloodtype":  "B-",
        },
        patient: {
            "Name": "Catherine", 
            "Organ": "kidney",
            "Bloodtype":  "B-",
        }
    }
]
    let handleClick = e => {
        e.target.innerHTML = 'Pending'

    }
    
    return (
        <div className="bg-blue-300 flex items-center flex-col p-5">
            <div className="text-4xl pb-5 " style={{fontFamily:"Fondamento", fontSize:"30px"}}>View Matches</div>
            {matches.map((match, idx) => <Pairs handleClick={handleClick} idx={idx} donor={match.donor} patient={match.patient}/>)}
        </div>
    )
}

export default MatchesSection