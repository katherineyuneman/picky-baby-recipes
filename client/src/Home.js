import React, { useContext } from 'react'
import { UserContext } from './context/user'

function Home() {

    const { user } = useContext(UserContext)

    const renderHello = !user ? <h1>Sign in!</h1> : <h1>Hello, {user.first_name}</h1>

  return (
    <div>
      {renderHello}
    </div>

  )
}

export default Home
