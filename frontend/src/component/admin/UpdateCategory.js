import React, { useEffect, useState } from 'react'
import { getcategorydetail, updatecategory } from '../../api/adminApi'
import Navbar from '../Navbar'
import AdminSidebar from './AdminSidebar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom'

const UpdateCategory = () => {
    let [text,setText]=useState('')
    let [success,setSuccess]=useState('')
    let [error,setError]=useState('')
    let {id}=useParams()
    // let params=useParams()
    // let id=params.id
    // let{product}=req.body (destructure)
    // req.body.product
    useEffect(()=>{
        getcategorydetail(id)
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
        updatecategory(id,text)
        .then(data=>{
            console.log(data)
            if(data.error){
                setError(data.error)
                setSuccess('')
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
            return <div className='alert alert-success'>Category Updated Successfully</div>
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
                <h1>Update Category</h1>
                <input type="text" className='form-control' onChange={e=>{setText(e.target.value)}} value={text.category_name} />
                <button onClick={handleSubmit} className='btn btn-primary mt-1'>Update</button>
            </form>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default UpdateCategory