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
            navigate('/login')
            logout();
        })
    }
   console.log(loggedIn)
    if (!loggedIn){
        return (
            <Header>
            <h1>
                    <Link to="/" className='logo'> Picky Eater App </Link>
            </h1>
            <div className="columns">
                <div className="column is-four-fifths">
                <nav>
                    <Link to="/signup" className='link'> Signup </Link> | 
                    <Link to="/login" className='link'> Login </Link> | 
                    <Link to="/foods" className='link'> Food List</Link> |
                </nav>
            </div>
            </div>
            </Header>)
    } else
            {return (
                <Header>
                    <h1>
                        <Link to="/" className='logo'> Picky Eater App </Link>
                    </h1>
                    <nav>
                        <Link to="/foods" className='link'> Food List </Link> | 
                        <Link to="/myrecipes" className='link'> My Recipes </Link> | 
                        <Link to="/recipes/new" className='link'> Add a Recipe </Link> | 
                        <Link to="/" onClick={logoutUser} className='link'> Logout</Link>
                    </nav>
                    
                </Header>
    )
        }
  
}

export default Navbar
