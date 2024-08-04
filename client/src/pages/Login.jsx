import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  //login should come from the context api
  const {login} = useContext(AuthContext)

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();

    //login function from context 
    await login(inputs).then((result) => {
      navigate('/');

    }).catch((err)=>{
      setErr(err.response.data)

    })
    
  }
  
  
  return (
    <div class="register-photo">
    <div class="form-container">
        <div class="image-holder"></div>
        <form>
            <h2 class="text-center"><strong>Login to</strong> an account.</h2>
            <div class="form-group"><input required class="form-control" placeholder='username' name='username' onChange={handleChange} type="text"/></div>
            <div class="form-group"><input required class="form-control" type="password" placeholder='password' name='password' onChange={handleChange}/></div>
            <div class="form-group"><input class="form-control" type="password" name="password-repeat" placeholder="Password (repeat)"/></div>
            <div class="form-group"><button class="btn btn-primary btn-block" type="submit" onClick={handleSubmit}>Login In</button>
            {err && <p>{err}</p>}
            </div>
            <span>
            <a href="#" class="already">Don't have an account? <Link to='/register'>Register here.</Link></a>
            </span>
            </form>
    </div>
  </div>

  )
}

export default Login