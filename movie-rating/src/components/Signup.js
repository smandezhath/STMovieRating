import { useState } from "react";
import axios from 'axios'

const Signup = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(name, password , username)
    const res = await axios.post('https://zpworkshopapis.netlify.app/.netlify/functions/account/signup',{username : username , name : name , password : password});
    console.log(res);
    
    
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      
      <label>Name</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
      />
      <label>Username</label>
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

      <button>Sign up</button>
    </form>
  )
}

export default Signup;