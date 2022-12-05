import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../contexts/Context'

const ShowData = () => {

    const data = useContext(Context)

    return(
        <div>
            Tela ShowData: direto do context <strong>{data.name}</strong>
            <br />
            <Link to="/">Voltar para SingUp</Link> 
        </div>
    )
}

export default ShowData