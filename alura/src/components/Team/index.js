import Collaborator from '../Collaborator'
import './styles.css'

const Team = ({ name, primaryColor, secondaryColor, collaborators }) => {

    const styleSection = { backgroundColor: secondaryColor }
    const styleH3 = { borderColor: primaryColor }

    return(
        collaborators.length > 0 &&
        
        <section className='team' style={styleSection}>
            <h3 style={styleH3}>{name}</h3>
            <div className='collaborators'>
            {collaborators.map((item, index) => 
                <Collaborator 
                    key={index}
                    name={item.name}
                    occupation={item.occupation}
                    image={item.urlImage}
                    team={item.team}
                />
            )}
            </div>
        </section>
    )
}

export default Team
