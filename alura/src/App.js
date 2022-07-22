import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'

function App() {

  const teams = [
    {name: 'Programação', primaryColor: '#57C278', secondaryColor: '#D9F7E9'},
    {name: 'Front-End', primaryColor: '#82CFFA', secondaryColor: '#E8F8FF'},
    {name: 'Data Science', primaryColor: '#A6D157', secondaryColor: '#F0F8E2'},
    {name: 'Devops', primaryColor: '#E06B69', secondaryColor: '#FDE7E8'},
    {name: 'UX e Design', primaryColor: '#DB6EBF', secondaryColor: '#FAE9F5'},
    {name: 'Mobile', primaryColor: '#FFBA05', secondaryColor: '#FFF5D9'},
    {name: 'Inovação e Gestão', primaryColor: '#FF8A29', secondaryColor: '#FFEEDF'}
  ]

  const [collaborator, setCollaborator] = useState([])

  const newCollaborator = (data) => {
    setCollaborator([...collaborator, data])
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teams={teams.map(team => team.name)}
        addCollaborator={data => newCollaborator(data)}
      />

      {teams.map((team, index) => 
        <Team 
          key={index} name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={collaborator.filter(item => item.team==team.name)}
        />
      )}
    </div>
  )
}

export default App
