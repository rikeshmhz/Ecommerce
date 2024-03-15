import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { deleteuser, getuser } from '../../api/adminApi'
import swal from 'sweetalert'

const AdminUser = () => {
    let [user, setUser] = useState([])
    let [error, setError] = useState('')

    useEffect(() => {
        getuser()
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setUser(data)
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
                        deleteuser(id)
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
                        <AdminSidebar users />
                    </div>
                    <div className="col-9">
                        <h1>Users</h1>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Username</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user && user.map((v, i) => {
                                        return <tr>
                                            <td>{i + 1}</td>
                                            <td>{v.username}</td>
                                            <td>
                                                <Link to={`/admin/updateuser/${v._id}`}> <button className='btn btn-primary'>Update</button></Link>
                                                <button className='btn btn-danger' onClick={handleDelete(v._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminUser