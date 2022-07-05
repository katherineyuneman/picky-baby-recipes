import React, { useContext } from 'react'
// import Login from './Login'
// import Signup from './Signup'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

function Navbar() {

    const { user, logout } = useContext(UserContext)
    console.log("user inside navbar:", user)

    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('http://localhost:3000/logout', {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json'}
        })
        .then(() => {
            logout();
            navigate('/')
        })
    }
   
    if (!user ||  user.error){
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
                </h2>
            </div>)
    } else
            {return (
    <div>
      
      <button onClick={logoutUser}>Logout</button>
    </div>)
        }
  
}

export default Navbar
