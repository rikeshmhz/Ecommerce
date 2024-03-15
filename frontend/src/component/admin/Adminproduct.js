import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { deleteproduct, getProduct } from '../../api/adminApi'
import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import Footer from '../Footer'
import { API } from '../../config'

const Adminproduct = () => {
    const [product,setProduct]=useState([])
    const [error,setError]=useState('')
    // const [success,setSuccess]=useState('')

    useEffect(()=>{
        getProduct()
        .then(data=>{
            if(data.error)
            {
                setError(data.error)
            }
            else{
                setProduct(data)            }
        })
    },[])
    const handleDelete = (id) => (e) => {
        e.preventDefault()
        swal("Are you sure?", "Once deleted, you will not be able to undo", "warning", {
            buttons: {
                catch: {
                    text: "Yes, Delete it!",
                    value: "catch",
                },
                No: {
                    text: "Cancel",
                    value: "No",
                }
            },
        })
            .then((value) => {
                switch (value) {
                    case "No":
                        swal("Cancelled!", "Delete Unsuccessfull", "error");
                        break;

                    case "catch":
                        swal("Deleted!", "Delete Successfull", "success", {
                            buttons: false,
                        });
                        deleteproduct(id)
                            .then(data => {
                                if (data.error) {
                                    setError(data.error)
                                } else {
                                    setTimeout(() => {
                                        window.location.reload(false)
                                    }, 1000)
                                }
                            })
                        break;

                    default:

                }
            });
    }

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    return (
        <>
        {
                showError()
            }
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <AdminSidebar product />
                    </div>
                    <div className="col-9">
                        <h1>Products</h1>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Rating</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product && product.map((v,i)=>{
                                        return <tr>
                                            <td key={v._id}>{i+1}</td>
                                            <td>{v.product_name}</td>
                                            <td><img src={`${API}/${v.product_image}`} height={50}alt="" /></td>
                                            <td>{v.product_price}</td>
                                            <td>{v.count_in_stock}</td>
                                            <td>{v.rating}</td>
                                            <td>{v.product_description}</td>
                                            <td>
                                                <Link to={`/admin/updateproduct/${v._id}`}> <button className='btn btn-primary'>Update</button></Link>
                                                <button className='btn btn-danger' onClick={handleDelete(v._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        <Link to="/admin/addproduct" className='text-decoration-none'><h4>Add Product</h4></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Adminproduct