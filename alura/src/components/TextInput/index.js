import './styles.css'

const TextInput = ({ label, placeholder }) => {

    return(
        <div className="textInput">
            <label>{label}</label>
            <input placeholder={placeholder}/>
        </div>
    )
}

export default TextInput
