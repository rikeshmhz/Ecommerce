import { getproductdetail } from '../../api/adminApi'
import {ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO} from './cartConstant'
import swal from 'sweetalert'

export const add_item_to_cart=(product,quantity)=>async(dispatch,getState)=>{
    let data=await getproductdetail(product)
    dispatch({
        type:ADD_TO_CART,
        payload:{
            product:data._id,
            product_name:data.product_name,
            product_price:data.product_price,
            product_image:data.product_image,
            count_in_stock:data.count_in_stock,
            quantity:quantity
        }
    })
    localStorage.setItem("cart_items",JSON.stringify(getState().cart.cart_items))
}
export const removefromcart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })
    localStorage.setItem("cart_items",JSON.stringify(getState().cart.cart_items))
    swal("Item Deleted","Deleted","success")
}
export const save_shipping=(shipping_info)=>(dispatch,getState)=>{
    dispatch({
        type:SAVE_SHIPPING_INFO,
        payload:shipping_info
    })
    localStorage.setItem("shippinginfo",JSON.stringify(getState().cart.shipping_info))
    swal("Success","Info Saved Successfully","success")
}