import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'

function App() {

  const [collaborator, setCollaborator] = useState([])

  const newCollaborator = (data) => {
    console.log(data)
    setCollaborator([...collaborator, data])
  }

  return (
    <div className="App">
      <Banner />
      <Form addCollaborator={data => newCollaborator(data)}/>
    </div>
  )
}

export default App
