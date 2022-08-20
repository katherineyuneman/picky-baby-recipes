import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import { useNavigate, Link } from 'react-router-dom'
import { HomeContainer, SearchStyle } from './styled-components/styleIndex'

function Home({handleFoodSubmit}) {

    const { user, loggedIn } = useContext(UserContext)
    const [ searchInput , setSearchInput ] = useState("Search for any food here..")
    
    const [foodId, setFoodId ] = useState("")
    const navigate = useNavigate()


    console.log("user in home:", user, "logged in:", loggedIn)

    console.log("search INput:", searchInput)
    const handleTextInput = (e) => {
        const input = e.target.value
        setSearchInput(input)
    }

    // const handleFoodSubmit =(e) => {
    //     e.preventDefault();
    //     setFoodSubmitted(searchInput)

    //     const lowerCaseSearch = searchInput.toLowerCase()
    //     fetch ("/foodsearch", {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify({
    //             search: lowerCaseSearch
    //         })
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.errors){
    //                 console.log(data.errors)
    //             } else{
    //             console.log("fetched:", data)
    //             // setFoodId(data.id)
    //             navigate(`/foods`)
    //         }
    //         })
        
    // }

    const handleStartTyping = (e) => {
        setSearchInput("")
    }
    
    if (loggedIn === true) {
        return (
            <HomeContainer>
                <div>
                    <h1>Hello, {user.first_name} </h1>
                    <h3>Welcome to your child's recipe guide!</h3>
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
