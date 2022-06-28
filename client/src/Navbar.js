import React from 'react'
// import Login from './Login'
// import Signup from './Signup'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h2>NavBar</h2>
      <Link to="/signup">
      <button>Signup</button>
      </Link>
      <Link to="/login">
      <button>Login</button>
      </Link>
    </div>
  )
}

export default Navbar
