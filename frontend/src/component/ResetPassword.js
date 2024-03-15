import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { resetPassword } from '../api/userApi'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    let params=useParams()
    let token=params.token
    let [password,setPassword]=useState('')
    let [success,setSuccess]=useState('')
    let [error,setError]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        resetPassword(token,password)
        .then(data=>{
            if(data.err){
               setError(data.err)
            }else{
                setSuccess(data.msg)
            }
        })
    }
    const showError=()=>{
        if(error){
          return <div className='alert alert-danger'>{error}</div>
        }
      }
      const showSucess=()=>{
        if(success){
          return <div className='alert alert-success'>{success}</div>
        }
      }
  return (
    <>
    <Navbar/>
    {
        showError()
    }
    {
        showSucess()
    }
    <form className='w-25 my-5 m-auto shadow-sm'>
        <label htmlFor='email'>Password</label>
        <input type='password' id='password' className='form-control' onChange={e=>setPassword(e.target.value)}/>
        <button className='btn btn-warning w-100 mt-3' onClick={handleSubmit}>Submit</button>
    </form>
    <Footer/>
    </>
  )
}

export default ResetPassword