import './styles.css'

const TextInput = ({ label, placeholder, required }) => {

    return(
        <div className="textInput">
            <label>{label}</label>
            <input placeholder={placeholder} required={required}/>
        </div>
    )
}

export default TextInput
