import React, { useContext } from 'react'
import { UserContext } from './context/user'


function Home() {

    const { user, loggedIn } = useContext(UserContext)

    console.log("user in home:", user, "logged in:", loggedIn)

    
    if (loggedIn === true) {
        return (
            <div>
                <h1>Hello, {user.first_name} </h1>
                <h3>Welcome to your child's recipe guide!</h3>
            </div>)
    } else {
        return <h1>Please login or signup</h1>
        }
}

export default Home
