import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '../config'
import { add_item_to_cart, removefromcart } from './Reducers/cartAction'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const cart_items=useSelector(state=>state.cart.cart_items)
  const cart_items_number_arr=cart_items.map(items=>items.quantity)
  // console.log(cart_items_number_arr)
  const cart_items_number=cart_items.length>0? cart_items_number_arr.reduce((a,b)=>{
    return a+b
  }):0
  const cart_items_price_arr=cart_items.map(items=>items.product_price*items.quantity)
  const cart_items_price=cart_items.length>0? cart_items_price_arr.reduce((c,d)=>{
    return c+d
  }):0
  const decreaseQuantity=(id,quantity)=>(e)=>{
    e.preventDefault()
    quantity--
    if(quantity==0){
      dispatch(removefromcart(id))
    }else{
      dispatch(add_item_to_cart(id,quantity))
    }
  }
  const increaseQuantity=(id,quantity,countinstock)=>(e)=>{
    e.preventDefault()
    quantity++
    if(countinstock<quantity){
      swal("Error","Quantity must be less than count in stock","warning")
    }else{
      dispatch(add_item_to_cart(id,quantity))
    }
  }
  const handleShipping=(e)=>{
    e.preventDefault()
    sessionStorage.setItem("Order_Summary",JSON.stringify({cart_items_number,cart_items_price}))
    return navigate("/shipping")
  }
  return (
    <> 
    {
      cart_items.length>0?
      <div className="row">
      <div className="col-md-9">
      <div className="container-fluid">
        <table className="table table-bordered border border-4 border-primary table-hover align-middle text-center fw-bold">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
             cart_items && cart_items.map((v,i)=>{
                return <tr key={i}>
                <td>{i+1}</td>
                <td><img src={`${API}/${v.product_image}`} height={50}alt="" /></td>
                <td>{v.product_name}</td>
                <td>
                  <div className="btn btn-primary " style={{'borderRadius':'20px 0 0 20px'}} onClick={decreaseQuantity(v.product,v.quantity)}
                  >-</div>
                  <input type='text' className='form-control' style={{width:'40px',display:'inline-block'}} value={v.quantity} readOnly/>
                  <div className="btn btn-primary rounded-end-circle" style={{'borderRadius':'0 20px 20px 0'}} onClick={increaseQuantity(v.product,v.quantity,v.count_in_stock)}>+</div>
                  </td>
                <td>{v.product_price * v.quantity}</td>
                <td>
                  <div className="btn btn-danger" onClick={()=>{
                    dispatch(removefromcart(v.product))
                  }}>Remove</div>
                </td>
              </tr>
              })
            }     
          </tbody>
        </table>
      </div>
      </div>
      <div className="col-md-3">
        <h1>Cart Details</h1>
        <h3>Cart Items: {cart_items_number}</h3>
        <h3>Total Price: {`${cart_items_price}`}</h3>
        <div className="btn btn-primary" onClick={handleShipping}>Go to Shipping</div>
      </div>
    </div>: <div className='alert alert-danger'>No Items in cart</div>
    }
    
     
    </>
  )
}

export default Cart