import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

      const res = await axios.post('https://zpworkshopapis.netlify.app/.netlify/functions/account/login',{username : username , password : password});
      console.log(res.status);

      if(res.status === 200){
        localStorage.setItem("loggedIn","true");
        navigate('/movies');
      }
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