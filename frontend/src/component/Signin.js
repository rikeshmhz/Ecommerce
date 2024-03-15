import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../api/userApi'

function Signin() {
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  let [success,setSuccess]=useState('')
  let [error,setError]=useState('')
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    signin(email,password)
    .then(data=>{
      if(data.err){
        setError(data.err)
      }else{
        setSuccess(true)
        authenticate(data)
      }
    })
  }
  const showerror=()=>{
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const redirect=()=>{
    if(success){
      if(isAuthenticated().user.role===0){
        navigate("/")//frontend path (Myroutes) , {state : {email : email}}
      }else{
        navigate("/admin/dashboard")
      }
      
    }
  }
  return (
    <>
    {
      showerror()
    }
    {
      redirect()
    }
    <div class="text-center container mt-5">
        <main class="form-signin w-25 m-auto border p-1 rounded-5 shadow-lg">
          <form>
            <img class="mb-4 rounded-circle" src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png" alt="" width="72" height="57" />
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)} />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
              <label for="floatingPassword">Password</label>
            </div>
        
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <Link to='/forgetpassword'>Forget Password</Link>
            <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign in</button>
            Don't have an account <Link to="./register.html">Register</Link>
            <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </main>
          </div>
    </>
  )
}

export default Signin