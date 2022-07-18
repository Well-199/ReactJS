import { useContext } from "react"
import { Link } from "react-router-dom"

import { Context } from '../contexts/Context'

export const SignUp = () => {

    const { name, age } = useContext(Context)

    return(
        <div>
            Tela de Cadastro {name} idade {age} anos.
            <br/>
            <Link to="/exibir">Visualizar dados</Link>
        </div>
    )
}
