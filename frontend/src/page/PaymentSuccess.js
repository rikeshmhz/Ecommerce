import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useNavigate } from 'react-router-dom'

export const PaymentSuccess = () => {
  const navigate=useNavigate()
  setInterval(()=>{
    navigate("/")
  },5000)
  return (
    <>
    <Navbar/>
    <div className='alert alert-success'> 
        Payment Successfull
        Please Wait you are being redirected to homepage
    </div>
    <Footer/>
    </>
  )
}
