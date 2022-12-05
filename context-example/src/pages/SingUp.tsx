import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../contexts/Context'

const SingUp = () => {

    // a função useContext excuta a leitura do contexto
    const { name, age } = useContext(Context)

    return(
        <div>
            Tela SingUp: O <strong>{name}</strong> tem <strong>{age}</strong> anos de idade
            <br />
            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    )
}

export default SingUp
