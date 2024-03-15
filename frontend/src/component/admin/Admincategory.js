import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import AdminSidebar from './AdminSidebar'
import Footer from '../Footer'
import { deletecategory, getcategory } from '../../api/adminApi'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const Admincategory = () => {
    let [categories, setCategories] = useState([])
    let [error, setError] = useState('')

    useEffect(() => {
        getcategory()
            .then(data => {
                if (data.err) {
                    setError(data.err)
                } else {
                    setCategories(data)
                }
            })
    }, [])
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
                        deletecategory(id)
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
                        <AdminSidebar category />
                    </div>
                    <div className="col-9">
                        <h1>Categories</h1>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Category_name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories && categories.map((v, i) => {
                                        return <tr>
                                            <td>{i + 1}</td>
                                            <td>{v.category_name}</td>
                                            <td>
                                                <Link to={`/category/updatecategory/${v._id}`}> <button className='btn btn-primary'>Update</button></Link>
                                                <button className='btn btn-danger' onClick={handleDelete(v._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        <Link to="/admin/addcategory">Add new Category</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Admincategory