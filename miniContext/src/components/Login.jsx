import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const[username, setUsername]=useState('')
    const[password,setPassword]=useState('')

    // UserContext values fetch using useContext
    // accessing setUser using useContext
    const {SetUser}=useContext(UserContext)

    // data sending
    const handleSubmit=(e)=>{
        e.preventDefault()
        SetUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>

        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username' />

        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login