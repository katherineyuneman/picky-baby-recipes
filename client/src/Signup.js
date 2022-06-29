import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [signupCredentials, setSignupCredentials] = useState ({
        email:"",
        password:"",
        password_confirmation: ""
    })

    const history = useNavigate()


    const handleInputs = e => {
        console.log(e.target.value)
        setSignupCredentials({
            ...signupCredentials,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submit")

        const newSignup ={
            email: signupCredentials.email,
            password: signupCredentials.password,
            password_confirmation: signupCredentials.password_confirmation
        }

        fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(newSignup)
        })
        .then(resp => resp.json())
        .then((data) => {
            if (data.errors){
                alert(data.errors)
            } else {
                history.push("/")
            }
        })

     }

  return (
    <div>
      <p> Please sign up for an account with your details below:</p>

      <form onSubmit={handleSubmit}>
            <label>Email Address:
              <input type="text" name="email" value={signupCredentials.email} maxLength={20} onChange={handleInputs}/>
            </label>
            <br/>
            <label>Password:
              <input type="password" name="password" value={signupCredentials.password} maxLength={20} onChange={handleInputs}/>
            </label>
            <br/>
            <label>Password Confirmation:
              <input type="password" name="password_confirmation" value={signupCredentials.password_confirmation} maxLength={20} onChange={handleInputs}/>
            </label>
            <br/>
              <button>Create Account</button>
        </form>
    </div>
  )
}

export default Signup
