import { API } from "../config"

export const placeorder=(order)=>{
    return fetch(`${API}/order/placeorder`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(order)
    })
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}