import React, { useContext } from 'react'
// import Login from './Login'
// import Signup from './Signup'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'
import { Header } from './styled-components/styleIndex'

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
            <div className="columns">
                <div className="column is-four-fifths">
                <h2>NavBar</h2>
                <h2>
                    <Link to="/signup">
                        Signup
                    </Link>
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/foodlist">
                        Food List
                    </Link>
                </h2>
            </div>
            </div>)
    } else
            {return (
                <Header>
                    <h1>Picky Eater App</h1>
                    <nav>
                        <Link to="/foodlist"> Food List </Link>
                        <Link to="/myrecipes"> My Recipes </Link>
                        <Link to="/recipes/new"> Add a Recipe </Link>
                        <a href="#" onClick={logoutUser}>Logout</a>
                    </nav>
                    
                </Header>
    )
        }
  
}

export default Navbar
