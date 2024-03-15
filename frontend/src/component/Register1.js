import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { userRegister } from '../api/userApi'

function Register1() {
    let [username,setUsername]=useState('')
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let [error,setError]=useState('')
    let [success,setSuccess]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        userRegister(username,email,password)
        .then(data=>{
            if(data.error){
               setError(data.error)
               setSuccess(false) 
            }else{
                setSuccess(true)
                setError('')
            }
        })
    }
    const showError=()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess=()=>{
        if(success){
            return <div className='alert alert-success'>User Registered successfully</div>
        }
    }
  return (
    <>
    {
      showError()
    }
    {
      showSuccess()
    }
    <div class="text-center container mt-5">
        <main class="form-signin w-25 m-auto border p-1 rounded-5 shadow-lg">
          <form>
            <img class="mb-4 rounded-circle" src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png" alt="" width="72" height="57" />
            <h1 class="h3 mb-3 fw-normal">Please Register</h1>
            <div class="form-floating">
              <input type="text" class="form-control" id="InputUsername" placeholder="Username" onChange={e=>setUsername(e.target.value)} />
              <label for="inputUsername">Username</label>
            </div>
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
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
            <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>SignUp</button>
            Don't have an account <Link to="./register.html">Register</Link>
            <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </main>
          </div>
    </>
  )
}

export default Register1