import React, { useContext } from 'react'
import { UserContext } from './context/user'


function Home() {

    const { user, loggedIn } = useContext(UserContext)

    console.log("user in home:", user, "logged in:", loggedIn)

    
    if (loggedIn === true) {
        return <h1>Hello, {user.first_name} </h1>
    } else {
        return <h1>Please login or signup</h1>
        }
}

export default Home
