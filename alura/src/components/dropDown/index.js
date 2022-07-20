import './styles.css'

const DropDown = ({ label, itens, required, inTyping, value }) => {
    return(
        <div className='dropdown'>
            <label>{label}</label>
            <select 
                onChange={event => inTyping(event.target.value)} 
                required={required}
                value={value}
            >
                {itens.map((item, index) => 
                <option key={index}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default DropDown
