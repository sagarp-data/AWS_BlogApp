import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/Register'

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [err, setErr] = useState(null)
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  
  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))

    if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'password-repeat') {
      setPasswordRepeat(e.target.value);
      if (e.target.value !== password) {
        setPasswordError('Passwords do not match');
      } else {
        setPasswordError('');
      }
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== passwordRepeat) {
      alert('Passwords do not match');
    } else {
      // submit form
    }

    await registerUser(inputs).then((result) => {
      navigate('/login')
    }).catch((err)=> {
      setErr(err.response.data)
    })
  }

   
  return (
    <div class="login-photo">
    <div class="form-container">
        <div class="image-holder"></div>
        <form>
            <h2 class="text-center"><strong>Create</strong> an account.</h2>
            <div class="form-group"><input required class="form-control" placeholder='username' name='username' onChange={handleChange} type="text"/></div>
            <div class="form-group"><input required class="form-control" type='text' placeholder='email' name='email' onChange={handleChange}/></div>
            <div class="form-group"><input required class="form-control" type="password" placeholder='password' name='password' onChange={handleChange}/></div>
            <div class="form-group"><input class="form-control" type="password" name="password-repeat" placeholder="Password (repeat)" onChange={handleChange}/></div>
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            <div class="form-group"><button class="btn btn-primary btn-block" type="submit" onClick={handleSubmit}>Register</button>
            {err && <p>{err}</p>}
            </div>
            <span>
            <a href="#" class="already">Already have an account? <Link to='/login'>Login here.</Link></a>
            </span>
            </form>
    </div>
  </div>
  )
  // return (
  //   <div className='authDiv'>
  //       <h1>Register</h1>
  //       <form>
  //           <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
  //           <input required type='text' placeholder='email' name='email' onChange={handleChange}/>
  //           <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
  //           <button onClick={handleSubmit}>Register</button>
  //           {err && <p>{err}</p>}
  //           <span>Already have an account? <Link to='/login'>Login</Link></span>
  //       </form>
  //   </div>
  // )
}

export default Register