import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useParams } from 'react-router-dom'
import './ProductDetailsCss.css'
import { getproductdetail } from '../api/adminApi'
import { API } from "../config"
import ReactStars from "react-rating-stars-component";
import { useDispatch } from 'react-redux'
import { add_item_to_cart } from './Reducers/cartAction'
import swal from 'sweetalert'

const ProductDetails1 = () => {
    const [product,setProduct]=useState({})
    let {id}=useParams()
    const dispatch=useDispatch()
    
    useEffect(()=>{
        getproductdetail(id)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                setProduct(data)
                console.log(data)
            }
        })
    },[])
    const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(add_item_to_cart(id,1))
      swal("Congrats",`${product.product_name}`,"success")
    }
  return (
    <>
        <Navbar/>
        <section id="services" className="services section-bg">
   <div className="container-fluid">
      <div className="row row-sm">
         <div className="col-md-6 _boxzoom">
            <div className="_product-images">
               <div className="picZoomer">
                  <img className="my_img" src={`${API}/${product.product_image}`} alt=""/>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="_product-detail-content">
               <p className="_p-name"> {product.product_name} </p>
               <div className="_p-price-box">
                  <div className="p-list">
                     <span> M.R.P. : <i className="fa fa-inr"></i> <del> 1399  </del>   </span>
                     <span className="price"> Rs. {product.product_price}</span>
                  </div>
                  <div className="_p-add-cart">
                     <div className="_p-qty">
                        <span>Add Quantity</span>
                        <div className="value-button decrease_" id="" value="Decrease Value">-</div>
                        <input type="number" name="qty" id="number" value="1" />
                        <div className="value-button increase_" id="" value="Increase Value">+</div>
                     </div>
                  </div>
                  {
                     product.rating &&
                   <ReactStars size={30} value={`${product.rating}`} /> 
                  }
                  <div className="_p-features">
                     <span> Description About this product:- </span>
                     {product.product_description}                    
                  </div>
                  <form action="" method="post" accept-charset="utf-8">
                     <ul className="spe_ul"></ul>
                     <div className="_p-qty-and-cart">
                        <div className="_p-add-cart">
                           <button className="btn-theme btn buy-btn" tabindex="0">
                           <i className="fa fa-shopping-cart"></i> Buy Now
                           </button>
                           <button className="btn-theme btn btn-success" tabindex="0" onClick={handleSubmit}>
                           <i className="fa fa-shopping-cart"></i> Add to Cart
                           </button>
                           <input type="hidden" name="pid" value="18" />
                           <input type="hidden" name="price" value="850" />
                           <input type="hidden" name="url" value="" />    
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
        <Footer/>
    </>
  )
}

export default ProductDetails1