import React, { useContext } from 'react'
// import Login from './Login'
// import Signup from './Signup'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

function Navbar() {

    const { user, logout, loggedIn } = useContext(UserContext)
    console.log("user inside navbar:", user)

    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json'}
        })
        .then(() => {
            logout();
            navigate('/')
        })
    }
   console.log(loggedIn)
    if (!loggedIn){
        return (
            <div>
                <h2>NavBar</h2>
                <h2>
                    <Link to="/signup">
                        <button>Signup</button>
                    </Link>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/foodlist">
                        <button>Food List</button>
                    </Link>
                </h2>
            </div>)
    } else
            {return (
    <div>
      
      <button onClick={logoutUser}>Logout</button>
      <Link to="/foodlist">
                        <button>Food List</button>
                    </Link>
    <Link to="/myrecipes">
        <button>My Recipes</button>
    </Link>
    </div>
    )
        }
  
}

export default Navbar
