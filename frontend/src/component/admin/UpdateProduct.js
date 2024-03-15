import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { getcategory, getproductdetail, updateproduct } from '../../api/adminApi'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {
    let [categories,setCategories]=useState([])
    let [product,setProduct]=useState({
        product_name:'',
        product_price:'',
        product_description:'',
        count_in_stock:'',
        product_image:'',
        rating:'',
        category:'',
        error:'',
        success:false,
        formdata:''
    })
    let sel_ref=useRef()
    let file_ref=useRef()
    let {product_name,product_price,product_description,count_in_stock,rating,error,success,formdata}=product
    const {id}=useParams()
    useEffect(()=>{
        getcategory()
        .then(data=>{
            if(data){
                setCategories(data)
            }
        })
        getproductdetail(id)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            setProduct({...product,...data,formdata:new FormData()})
            console.log(data)
            sel_ref.current.value =data.category
           
        })
    },[])

const handleChange=(name)=>(e)=>{
    let value
    if(name==='product_image'){
        value=e.target.files[0]
    }
    else{
        value=e.target.value
    }
    setProduct({...product,[name]:value})
    formdata.set(name,value)
    console.log(formdata)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    updateproduct(id,formdata)
    .then(data=>{
        if(data.error){
            setProduct({...product,error:data.error,success:false})
        }else{
            setProduct({product,success:true,error:""})
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
        return <div className='alert alert-success'>Product Added Successfully..</div>
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
        <Navbar/>
        <div className="row">
            <div className="col-3">
                <AdminSidebar product/>
            </div>
            <div className="col-9">
            <form action="" className='w-50 text-center m-auto border border-2 p-5 mt-5 border-primary'>
                <h1>Add New Product</h1>
                <label htmlFor="pname">Product Name:</label>
                <input type="text" className='form-control' id="pname" value={product_name} onChange={handleChange('product_name')}/>
                <label htmlFor="pprice">Product Price:</label>
                <input type="number" className='form-control' id="pprice" value={product_price} onChange={handleChange('product_price')}/>
                <label htmlFor="pdes">Product Description:</label>
                <textarea type="text" className='form-control' id="pdes" rows={5} value={product_description} onChange={handleChange('product_description')}/>
                <label htmlFor="pquantity">Product Quantity:</label>
                <input type="number" className='form-control' id="pquantity" value={count_in_stock} onChange={handleChange('count_in_stock')}/>
                <label htmlFor="prating">Product Rating:</label>
                <input type="number" className='form-control' id="prating" value={rating} onChange={handleChange('rating')}/>
                <label htmlFor="pimg">Product Image:</label>
                <input type="file" className='form-control' id="pimg" onChange={handleChange('product_image')} ref={file_ref}/>
                <label htmlFor="pcategories">Product Categories:</label>
                <select className="form-control" onChange={handleChange('category')} ref={sel_ref}>
                    <option className="form-control"></option>
                {
                    categories && categories.map((v,i)=>{
                        // console.log(v._id)
                        return <option value={v._id} key={v._id} className="form-control">{v.category_name}</option>
                    })
                }


                </select>
                <button onClick={handleSubmit} className='btn btn-primary mt-1'>Submit</button>
            </form>
            </div>

        </div>
        <Footer/>
    </>
  )
}

export default UpdateProduct