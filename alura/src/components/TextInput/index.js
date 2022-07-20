import './styles.css'

const TextInput = ({ label, placeholder, required, value, inTyping }) => {

    const sendChange = (event) => {
        inTyping(event.target.value)
    }

    return(
        <div className="textInput">
            <label>{label}</label>
            <input 
                placeholder={placeholder} 
                onChange={sendChange}
                value={value}
                required={required}
            />
        </div>
    )
}

export default TextInput
