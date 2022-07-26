import React from 'react'
import UserList from '../components/UsersList'

const Users = () => {

    const USERS = [
        {
            id: 'u1', 
            name: 'Wellington', 
            image: 'https://github.com/Well-199.png', 
            places: 3
        }
    ]

    return(
        <UserList items={USERS}/>
    )
}

export default Users
