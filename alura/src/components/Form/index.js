import './styles.css'
import TextInput from '../TextInput'
import DropDown from '../dropDown'
import Button from '../Button'

const Form = () => {

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
        console.log('Form was submit')
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
                    placeholder="Digite seu nome"
                />
                <TextInput 
                    label="Cargo"
                    required={true}
                    placeholder="Digite seu cargo"
                />
                <TextInput 
                    label="Imagem"
                    required={false}
                    placeholder="Digite o endereço da imagem"
                />
                <DropDown 
                    label="Time" 
                    itens={teams}
                    required={true}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form
