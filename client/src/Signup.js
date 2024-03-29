import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'
import { HomeContainer } from './styled-components/styleIndex'

function Signup() {

    const [signupCredentials, setSignupCredentials] = useState ({
        email:"",
        password:"",
        password_confirmation: "",
        first_name: "",
        last_name:""
    })
    const [errorsList, setErrorsList] = useState([])
    const { signUp } = useContext(UserContext)

    const navigate = useNavigate()

    const handleInputs = e => {
        setSignupCredentials({
            ...signupCredentials,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
      
        fetch('/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email: signupCredentials.email,
                password: signupCredentials.password,
                password_confirmation: signupCredentials.password_confirmation,
                first_name: signupCredentials.first_name,
                last_name: signupCredentials.last_name
            })
        })
        .then(resp => resp.json())
        .then((user) => {
            if (user.errors){
                const errorLis = user.errors.map((e) => <li>{e}</li>)
                setErrorsList(errorLis)
            } else {
                signUp(user)
                navigate('/')
            }
        })

     }

  return (
    <HomeContainer>
    <div>
      <p> Please sign up for an account with your details below:</p>

      <form onSubmit={handleSubmit}>
            <label>Email Address:
              <input type="text" name="email" value={signupCredentials.email} maxLength={20} onChange={handleInputs}/>
            </label>
            <br/>
            <label>First Name:
              <input type="text" name="first_name" value={signupCredentials.first_name} maxLength={20} onChange={handleInputs}/>
            </label>
            <br/>
            <label>Last Name:
              <input type="text" name="last_name" value={signupCredentials.last_name} maxLength={20} onChange={handleInputs}/>
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
    </HomeContainer>
  )
}

export default Signup
