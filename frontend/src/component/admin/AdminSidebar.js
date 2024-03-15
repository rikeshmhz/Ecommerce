import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signout } from '../../api/userApi'

const AdminSidebar = ({category,product,order,users}) => {
    let navigate=useNavigate()
    let {user}=isAuthenticated()
    const handleSubmit=(e)=>{
        e.preventDefault()
        signout()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                navigate("/sig")
            }
        })
    }
    return (
        <>
            <div>
                <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <i className="bi bi-bootstrap pe-none me-2" width="40" height="32"></i>
                        <span className="fs-4">Sidebar</span>
                    </Link>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            {
                                category?
                            <Link to="/admin/category" className="nav-link active" aria-current="page">
                                <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
                                Category
                            </Link>:
                            <Link to="/admin/category" className="nav-link text-white" aria-current="page">
                            <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
                            Category
                            </Link>
                            }
                        </li>
                        <li>
                        {
                                product?
                            <Link to="/admin/adminproduct" className="nav-link active" aria-current="page">
                                <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
                                Product
                            </Link>:
                            <Link to="/admin/adminproduct" className="nav-link text-white" aria-current="page">
                            <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
                            Product
                            </Link>
                            }
                        </li>
                        <li>
                        {
                                order?
                            <Link to="#" className="nav-link active" aria-current="page">
                                <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
                                Order
                            </Link>:
                            <Link to="#" className="nav-link text-white" aria-current="page">
                            <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
                            Order
                            </Link>
                            }
                        </li>
                        <li>
                        {
                                users?
                            <Link to="/admin/users" className="nav-link active" aria-current="page">
                                <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
                                Users
                            </Link>:
                            <Link to="/admin/users" className="nav-link text-white" aria-current="page">
                            <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
                            Users
                            </Link>
                            }
                        </li>
                    </ul>
                    <hr style={{marginTop: "300px"}}/>
                    <div className="dropdown">
                        <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>{user.username}</strong>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><Link className="dropdown-item" to="#">{user.email}</Link></li>
                            <li><Link className="dropdown-item" to="#">Settings</Link></li>
                            <li><Link className="dropdown-item" to="#">Profile</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li onClick={handleSubmit}><Link className="dropdown-item" to="/sig">Sign out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar