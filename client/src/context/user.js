import React, {useState, useEffect} from "react";

//Create context
const UserContext = React.createContext();

//create provider component

function UserProvider({children}){

    const [ user, setUser ] = useState(null)

    useEffect (() => {
        fetch ('http://localhost:3000/me')
        .then(resp => resp.json())
        // .then(data => {
        //     setUser(data)
        // })
        .then(data => {
            if (data.errors){
                console.log("errors from /me fetch:", data.errors)
            } else {
                setUser(data)
                console.log("data from fetch:", data)
            }
        })
    }, [])

    const login = (user) => {
        setUser(user)
        console.log("user within context set user:", user)
    }

    const logout = () => {
        setUser(null)
        console.log("user within context set user:", user)
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