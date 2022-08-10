import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import { useNavigate } from 'react-router-dom'
import FoodContainer from './containers/FoodContainer'


function Home() {

    const { user, loggedIn } = useContext(UserContext)
    const [ searchInput , setSearchInput ] = useState("")
    const [ foodSubmitted, setFoodSubmitted ] = useState ("")
    const navigate = useNavigate()

    console.log("user in home:", user, "logged in:", loggedIn)

    console.log("search INput:", searchInput)
    const handleTextInput = (e) => {
        const input = e.target.value
        setSearchInput(input)
    }

    const handleFoodSubmit =(e) => {
        e.preventDefault();
        setFoodSubmitted(searchInput)
        const lowerCaseSearch = searchInput.toLowerCase()
        navigate(`/foodlist/${lowerCaseSearch}`)
    }
    
    if (loggedIn === true) {
        return (
            <div>
                <h1>Hello, {user.first_name} </h1>
                <h3>Welcome to your child's recipe guide!</h3>
                <h4>Search for any food here:</h4>
                <form onSubmit={handleFoodSubmit}>
                    <input type="text" onChange={handleTextInput} value={searchInput}></input>
                    <button>Search</button>
                </form>
            </div>)
    } else {
        return <h1>Please login or signup</h1>
        }
}

export default Home
