import './styles.css'

const Collaborator = ({ name, occupation, image, backgroundColor }) => {
    return(
        <div className='collaborator'>
            <div className='header' style={{'backgroundColor': backgroundColor}}>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{occupation}</h5>
            </div>
        </div>
    )
}

export default Collaborator
