const FormInput = props => {
    return (
        <label className="p-3 flex flex-col justify-left text-left text-sm">
            <div className="mb-2">{props.text}</div>
            <input 
                className="text-md outline-none bg-transparent transition-all outline:none transform focus:-translate-y-1 focus:border-b-2 focus:border-blue-200" 
                type={props.type ? props.type: "text"}
                placeholder={props.placeholder}
                onChange={e => props.callback(e.target.value)} 
                name={props.text}
                value={props.value} 
            />
            <div className="pt-1 bg-blue-200"></div>
        </label>
    )
}

export default FormInput

