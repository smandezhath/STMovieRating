import { useState } from "react"
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

      const res = await axios.post('https://zpworkshopapis.netlify.app/.netlify/functions/account/login',{username : username , password : password});
      console.log(res);

      localStorage.setItem("loggedIn","true");
      // console.log(username,password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>User Name:</label>
      <input 
        type="email" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button>Log in</button>
    </form>
  )
}

export default Login;