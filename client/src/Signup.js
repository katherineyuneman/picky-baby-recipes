import React from 'react'

function Signup() {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submit")
     }

  return (
    <div>
      <p> Please sign up for an account with your details below:</p>

      <form onSubmit={handleSubmit}>
            <label>Email Address:
              <input type="text" name="email" maxLength={20}/>
            </label>
            <br/>
            <label>Password:
              <input type="password" name="password" maxLength={20}/>
            </label>
            <br/>
            <label>Password Confirmation:
              <input type="password" name="password" maxLength={20}/>
            </label>
            <br/>
              <button>Create Account</button>
        </form>
    </div>
  )
}

export default Signup
