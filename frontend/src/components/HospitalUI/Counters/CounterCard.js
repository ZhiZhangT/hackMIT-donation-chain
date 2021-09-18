const CounterCard = props => {
    return(
        <div className="flex flex-col shadow-lg flex-1  mr-5 h-32 p-5 last:mr-0">
            <div>{props.label}</div>
            <div>{props.count}</div>
        </div>
    )
}

export default CounterCard