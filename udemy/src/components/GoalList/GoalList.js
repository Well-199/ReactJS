import React from "react"
import './GoalList.css'

const GoalList = ({ goals }) => {
    
    return(
        <ul className='goal-list'>
            {goals.map(item => 
            <li key={item.id}>{item.text}</li>
            )}
        </ul>
    )
}

export default GoalList
