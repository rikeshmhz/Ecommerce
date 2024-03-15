import React, { useReducer } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { save_shipping } from '../component/Reducers/cartAction'
import { useNavigate } from 'react-router-dom'

const Shipping = () => {
  const info=useSelector(state=>state.cart.shipping_info)
  console.log(info)
  const dispatch=useDispatch()
  const shippingReducer=(state,event)=>{
    console.log(state)
    return{...state,[event.target.name]:event.target.value}
  }
  const [shipping_info,setShipping_info]=useReducer(shippingReducer,{})
  const {username,email}=shipping_info

  const handleSave=(e)=>{
    e.preventDefault()
    dispatch(save_shipping(shipping_info))
  }


  // const handlebar=()=>{
  //   console.log(email,username)
  // }
  const navigate=useNavigate()
  const handleShipping=(e)=>{
    e.preventDefault()
    return navigate("/checkout")
  }
  return (
    <>
    {/* <button onClick={handlebar}>Hello</button> */}
    <Navbar/>
        <div className="container">
            <h1 className='text-center text-primary'>Shipping Details</h1>
            <div className="row">
                <div className="col-md-9">
                  <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" value={info.firstname} id="firstName" name='firstname' placeholder="" onChange={setShipping_info} required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" value={info.lastname} id="lastName" name='lastname' placeholder="" onChange={setShipping_info} required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label for="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" value={info.username} id="username" name='username' placeholder="Username" onChange={setShipping_info} required/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
              <input type="email" className="form-control" value={info.email} id="email" name='email' placeholder="you@example.com" onChange={setShipping_info}/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" value={info.address} id="address" name='address' placeholder="1234 Main St" onChange={setShipping_info} required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
              <input type="text" className="form-control" value={info.alt_address} id="address2" name='alt_address' placeholder="Apartment or suite" onChange={setShipping_info}/>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" value={info.zip} id="zip" name='zip' placeholder="" onChange={setShipping_info} required/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>
          <div className="btn btn-primary" onClick={handleSave}>Save Info</div>
                  </form>
                </div>
                </div>
                <div className="col-md-3">
                    <h1>Cart Details</h1>
                    <h3>Cart Items:{JSON.parse(sessionStorage.getItem("Order_Summary")).cart_items_number}</h3>
                    <h3>Cart Price:{JSON.parse(sessionStorage.getItem("Order_Summary")).cart_items_price}</h3>
                    <div className="btn btn-primary form-control" onClick={handleShipping}>Proceed to Checking</div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Shipping