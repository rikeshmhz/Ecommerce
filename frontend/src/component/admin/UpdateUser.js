import React, { useEffect, useState } from 'react'
import { getuserdetail, updateuser } from '../../api/adminApi'
import Navbar from '../Navbar'
import AdminSidebar from './AdminSidebar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
    let [text,setText]=useState('')
    let [username,setUsername]=useState('')
    let [email,setEmail]=useState('')
    let [success,setSuccess]=useState()
    let [error,setError]=useState('')
    let {id}=useParams()
    // let params=useParams()
    // let id=params.id
    // let{product}=req.body (destructure)
    // req.body.product
    useEffect(()=>{
        getuserdetail(id)
        .then(data=>{
            if(data.error){
                setError(data.error)
                // setSuccess('')
            }else{
                setText(data)
            }  
        })
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault()
        updateuser(id,username,email)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }else{
                setSuccess(data.mess)          
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
            return <div className='alert alert-success'>{success}</div>
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
                <AdminSidebar users/>
            </div>
            <div className="col-9">
            <form action="" className='w-50 text-center m-auto border border-2 p-5 mt-5 border-primary'>
                <h1>Update User</h1>
                <label>Username</label>
                <input type="text" className='form-control' onChange={e=>{setUsername(e.target.value)}} defaultValue={text.username} />
                <label>Email</label>
                <input type="text" className='form-control' onChange={e=>{setEmail(e.target.value)}} defaultValue={text.email} />
                <button onClick={handleSubmit} className='btn btn-primary mt-1'>Update</button>
            </form>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default UpdateUser