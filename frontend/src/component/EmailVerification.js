import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { emailverification } from '../api/userApi'
import Navbar from './Navbar' 
import Footer from './Footer' 

const EmailVerification = () => {
    let [success,setSuccess]=useState('')
    let [error,setError]=useState('')
    let params=useParams()
    let token=params.token 
    useEffect(()=>{
      emailverification(token)
      .then(data=>{
        if(data.err){
          setError(data.err)
        }else{
          setSuccess(data.message)
        }
      })
    },[])
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
    <Link to='/sig'>Go to SiGNIN</Link>
    <Footer/>
    </>
  )
}

export default EmailVerification