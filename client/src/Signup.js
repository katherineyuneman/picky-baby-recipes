import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { signup, UserContext } from './context/user'

function Signup() {

    const [signupCredentials, setSignupCredentials] = useState ({
        email:"",
        password:"",
        password_confirmation: ""
    })
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)

    const history = useNavigate()


    const handleInputs = e => {
        console.log(e.target.value)
        setSignupCredentials({
            ...signupCredentials,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        

        // const user ={
        //     email: signupCredentials.email,
        //     password: signupCredentials.password,
        //     password_confirmation: signupCredentials.password_confirmation
        // }

        fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email: signupCredentials.email,
            password: signupCredentials.password,
            password_confirmation: signupCredentials.password_confirmation
        })
        })
        .then(resp => resp.json())
        .then((user) => {
            if (user.errors){
                // setSignupCredentials({})
                const errorLis = user.errors.map((e) => <li>{e}</li>)
                setErrorsList(errorLis)
            } else {
                signup(user)
                console.log("user after signup:", user)
                // history.push('/')
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
        <ul>
            {errorsList}
        </ul>
    </div>
  )
}

export default Signup
