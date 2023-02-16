import React, { useContext, useState } from 'react'
// import Login from './Login'
// import Signup from './Signup'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'
import { Header } from './styled-components/styleIndex'

function Navbar() {
    const { logout, loggedIn } = useContext(UserContext)
    const [ mobileNavBarOpen, setMobileNavBarOpen ] = useState('none')
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

    const handleMobileClick = () => {
        console.log("clicked!")
        if (mobileNavBarOpen === 'none' ) {
          setMobileNavBarOpen('display')}
          else {setMobileNavBarOpen('none')}
        }
   
    if (!loggedIn){
        return (
            <Header>
                <section class="navigation">
                    <div className='container'>
                        <div className='brand'>
                            <h3><Link to="/" className='logo'> Picky Eater App </Link></h3>
                        </div>
                    <nav>
                    <div class="nav-mobile"><a onClick={handleMobileClick} id="nav-toggle" href="#!"><span></span></a></div>
                        <ul className='nav-list'>
                        <ul className={mobileNavBarOpen}>
                            <li>
                                <Link to="/signup" className='link'> Signup </Link> | 
                            </li>
                            <li>
                                <Link to="/login" className='link'> Login </Link> | 
                            </li>
                            <li><Link to="/foods" className='link'> Food List</Link> |</li>
                        
                        </ul>
                        </ul>
                    </nav>
                    </div>
                </section>
            </Header>)
    } else
            {return (
                <Header>

                    <section class="navigation">
                        <div className='container'>
                            <div className='brand'>
                                <h1><Link to="/" className='logo'> Picky Eater App </Link></h1>
                            </div>
                        <nav>
                        <div class="nav-mobile"><a onClick={handleMobileClick} id="nav-toggle" href="#!"><span></span></a></div>
                            <ul className='nav-list'>
                            <ul className={mobileNavBarOpen}>
                                <li>
                                    <Link to="/foods" className='link'> Food List </Link>
                                </li>
                                <li>
                                    <Link to="/recipes" className='link'> My Recipes </Link>
                                </li>
                                <li>
                                    <Link to="/recipes/new" className='link'> Add a Recipe </Link> 
                                </li>
                                <li>
                                    <Link to="/" onClick={logoutUser} className='link'> Logout</Link>
                                </li>
                            
                            </ul>
                            </ul>
                        </nav>
                        </div>
                    </section>
                    
                </Header>
    )
        }
  
}

export default Navbar
