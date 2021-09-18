import CounterCard from "./CounterCard"

const CountersGroup = props => {
    return (
        <div className="w-full">
            <div className="flex flex-row max-w-screen-lg m-auto">
                {props.counters.map(counter => <CounterCard label={counter.label} count={counter.count}/>)}
            </div>
        </div>
    )
}

export default CountersGroup