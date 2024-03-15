import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signout } from '../api/userApi'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    signout()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        } else {
          navigate("/sig")
        }
      })
  }
  const cart_item=useSelector(state=>state.cart.cart_items.length)
  return (
    <>
      <div className="container-fluid custom-navbar">
        <div className="row">
          <div className="col-sm-6 col-md-3"><Link className="navbar-brand fs-2 text-muted fw-bolder" to="/">STORE</Link></div>
          <div className=" col-sm-12 col-md-6">
            <form className="d-flex my-2" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
          <div className="col-sm-6 col-md-3 d-flex justify-content-evenly">
            {
              isAuthenticated().user && isAuthenticated().user.role==0 &&
                <>
                  <Link to="/cart"><i className="bi bi-cart fs-2 position-relative">
                    <span class="position-absolute top-45 start-500 translate-middle badge rounded-pill bg-danger">
                    {
                      cart_item
                    }
                    <span class="visually-hidden">unread messages</span>
                  </span></i></Link>
                  <Link to="/sig"><i class="bi bi-box-arrow-in-left fs-2" onClick={handleSubmit}></i></Link>
                </>
              }
              {
                !isAuthenticated().user &&        
                <>
                  <Link to="/reg"><i className="bi bi-person-add fs-2"></i></Link>
                  <Link to="/sig"><i className="bi bi-box-arrow-in-right fs-2"></i></Link>
                </>
              }
              {
                isAuthenticated().user && isAuthenticated().user.role==1 &&
                <>
                  <Link to="/reg"><i className="bi bi-facebook fs-2"></i></Link>
                  <Link to="/sig"><i class="bi bi-box-arrow-in-left fs-2" onClick={handleSubmit}></i></Link>
                </>
              }
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/pro">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/ser">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/cart">Cart</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar