import { useState } from 'react'
import './styles.css'
import TextInput from '../TextInput'
import DropDown from '../dropDown'
import Button from '../Button'

const Form = () => {

    const [name, setName] = useState('')
    const [occupation, setOccupation] = useState('')
    const [urlImage, setUrlImage] = useState('')
    const [team, setTeam] = useState('')

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const inSave = (event) => {
        event.preventDefault()
    }

    return(
        <section className='form' onSubmit={inSave}>
            <form>
                <h2>
                    Preencha os dados para criar o card do colaborador
                </h2>
                <TextInput 
                    label="Nome"
                    required={true}
                    value={name}
                    inTyping={value => setName(value)}
                    placeholder="Digite seu nome"
                />
                <TextInput 
                    label="Cargo"
                    required={true}
                    value={occupation}
                    inTyping={value => setOccupation(value)}
                    placeholder="Digite seu cargo"
                />
                <TextInput 
                    label="Imagem"
                    required={false}
                    value={urlImage}
                    inTyping={value => setUrlImage(value)}
                    placeholder="Digite o endereço da imagem"
                />
                <DropDown 
                    label="Time" 
                    itens={teams}
                    required={true}
                    value={team}
                    inTyping={value => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form
