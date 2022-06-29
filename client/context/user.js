import {useState, useEffect} from "react";

//Create context
const UserContext = React.createContext();

//create provider component

function UserProvider({children}){

    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }