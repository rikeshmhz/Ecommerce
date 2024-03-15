import React, { useState } from 'react'
import { addCategory } from '../../api/adminApi'
import Navbar from '../Navbar'
import AdminSidebar from './AdminSidebar'
import Footer from '../Footer'
import { isAuthenticated } from '../../api/userApi'

const Addcategory = () => {
    const token=isAuthenticated().token
    let [text,setText]=useState('')
    let [success,setSuccess]=useState('')
    let [error,setError]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        addCategory(text,token)
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
    const showerror=()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
    }
    }
    const showsuccess=()=>{
        if(success){
            return <div className='alert alert-success'>Category Added Successfully</div>
        }
    }
    return (
        <>
        <Navbar/>
        {
            showerror()
        }
        {
            showsuccess()
        }
        <div className="row">
            <div className="col-3">
                <AdminSidebar category/>
            </div>
            <div className="col-9">
            <form action="" className='w-50 text-center m-auto border border-2 p-5 mt-5 border-primary'>
                <h1>Add New Category</h1>
                <input type="text" className='form-control' onChange={e=>{setText(e.target.value)}} placeholder='Eg. Shoes'/>
                <button onClick={handleSubmit} className='btn btn-primary mt-1'>Submit</button>
            </form>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default Addcategory