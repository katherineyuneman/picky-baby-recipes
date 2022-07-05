import React, {useState, useEffect} from "react";

//Create context
const UserContext = React.createContext();

//create provider component

function UserProvider({children}){

    const [ user, setUser ] = useState(null)
    const [ loggedIn, setLoggedIn ] = useState(false)


    useEffect (() => {
        fetch('http://localhost:3000/me')
        .then(resp => resp.json())
        // .then(data => {
        //     setUser(data)
        // })
        .then((data)=> {
            console.log("fetch", data.errors)
            setUser(data)
            console.log("DATA.ERROR user from context /me fetch", data.errors)
            data.errors ? setLoggedIn(false) : setLoggedIn(true)
        })
    }, [])

    const login = (user) => {
        setUser(user)
        console.log("user within context set user:", user)
        setLoggedIn(true)
    }

    const logout = () => {
        setLoggedIn(false)
        setUser(null)
        console.log("user within context set user:", user)
        
    }

    const signUp = (user) => {
        setUser(user)
        console.log("user within context set user:", user)
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{user, loggedIn, login, logout, signUp}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }