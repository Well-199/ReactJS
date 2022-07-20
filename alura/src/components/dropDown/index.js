import './styles.css'

const DropDown = ({ label, itens, required }) => {
    return(
        <div className='dropdown'>
            <label>{label}</label>
            <select required={required}>
                {itens.map((item, index) => 
                <option key={index}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default DropDown
