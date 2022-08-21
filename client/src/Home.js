import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import { Link } from 'react-router-dom'
import { HomeContainer, SearchStyle } from './styled-components/styleIndex'

function Home({handleFoodSubmit}) {

    const { user, loggedIn } = useContext(UserContext)
    const [ searchInput , setSearchInput ] = useState("Search for any food here..")
    
    
    


    console.log("user in home:", user, "logged in:", loggedIn)

    console.log("search INput:", searchInput)
    const handleTextInput = (e) => {
        const input = e.target.value
        setSearchInput(input)
    }
        


    const handleStartTyping = (e) => {
        setSearchInput("")
    }
    
    if (loggedIn === true) {
        return (
            <HomeContainer>
                <div>
                    <h1>Hello, {user.first_name} </h1>
                    <h3>Welcome to your Solid Foods database and Recipe Guide!</h3>
                    <SearchStyle>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleFoodSubmit(searchInput)}}>
                        <input type="text" onChange={handleTextInput} value={searchInput} onClick={handleStartTyping}></input>
                        <button>Search</button>
                    </form>
                    </SearchStyle>
                </div>
            </HomeContainer>
            )
    } else {
        return (
        <HomeContainer>
            <h1>Please <Link to="/login" className='link'> login </Link> or <Link to="/signup" className='link'> sign up </Link>!</h1>
            

        </HomeContainer>
        )
        }
}

export default Home
