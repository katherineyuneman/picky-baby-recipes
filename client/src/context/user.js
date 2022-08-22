import React, {useState, useEffect} from "react";

//Create context
const UserContext = React.createContext();

//create provider component

function UserProvider({children}){

    const [ user, setUser ] = useState(null)
    const [ loggedIn, setLoggedIn ] = useState(false)
    // const [ loginErrors, setLoginErrors] = useState([])
    
    useEffect (() => {
        fetch('/me')
        .then(resp => resp.json())
        .then((data)=> {
            if (data.errors) {
                // setLoginErrors(data.errors)
                setLoggedIn(false)
            } else {
            setUser(data)
            setLoggedIn(true)
            }
        })
    }, [])


    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        setLoggedIn(false)
        setUser(null)
    }

    const signUp = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{user, loggedIn, login, logout, signUp}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }