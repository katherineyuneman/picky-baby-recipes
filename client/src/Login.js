import React from 'react'

function Login() {
    const handleSubmit = e => {
        e.preventDefault()
        console.log("login")
     }
  return (
    <div>
        <p>Please login with your email address and password:</p>
      <form onSubmit={handleSubmit}>
            <label>Email Address:
              <input type="text" name="email" maxLength={20}/>
            </label>
            <br/>
            <label>Password:
              <input type="password" name="password" maxLength={20}/>
            </label>
            <br/>
              <button>Login</button>
        </form>
    </div>
  )
}

export default Login
