import React, { useContext } from 'react'
import { UserContext } from './context/user'

function Home() {

    const { user } = useContext(UserContext)

    console.log("user in home:", user)

    if (!user ||  user.error) {
        return <h1>Please login or signup</h1>
    } else {
        return <h1>Hello, {user.first_name}</h1>
        }

}

export default Home
