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

    const signUp = (user) => {
        setUser(user)
        console.log("user within context set user:", user)
    }

    return (
        <UserContext.Provider value={{user, login, logout, signUp}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }