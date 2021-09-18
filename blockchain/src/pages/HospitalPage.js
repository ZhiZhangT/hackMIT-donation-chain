import CountersGroup from "../components/HospitalUI/Counters/CountersGroup"
import ViewTransactionsSection from "../components/HospitalUI/ViewTransactionsSection"

const HospitalPage = props => {
    let counters = [
        {
            label: "Total patients",
            count: 4000
        },
        {
            label: "Successful operations", 
            count: 500 
        }, 
        {
            label: "Donors Pending",
            count: 50
        }
    ];
    return(
        <div className="">
            <div className="flex flex-col m-auto items-center max-w-screen-lg">
                Hospital page 
                <CountersGroup counters={counters}/>   
                <ViewTransactionsSection/>   
            </div>
        </div>
    )
}

export default HospitalPage