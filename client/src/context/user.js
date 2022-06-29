import React, {useState, useEffect} from "react";

//Create context
const UserContext = React.createContext();

//create provider component

function UserProvider({children}){

    const [ user, setUser ] = useState({})

    useEffect (() => {
        fetch ('http://localhost:3000/me')
        .then(resp => resp.json())
        .then(data => {
            setUser(data)

        })
    }, [])

    const login = () => {

    }

    const logout = () => {

    }

    const signup = (user) => {
        setUser(user)
    }

    return (
        <UserContext.Provider value={{user, login, logout, signup}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }