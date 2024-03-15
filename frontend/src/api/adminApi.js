import { API } from "../config"

export const addCategory=(category_name,token)=>{
    let category={category_name}
    return fetch(`${API}/category/addcategory`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const getcategory=()=>{
    return fetch(`${API}/category/getcategory`)
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const getcategorydetail=(id)=>{
    return fetch(`${API}/category/getcategorydetail/${id}`)
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err)})
}
export const updatecategory=(id,category_name)=>{
    let category={category_name}
    return fetch(`${API}/category/updatecategory/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(category)
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err)})
}
export const deletecategory=(id)=>{
    return fetch(`${API}/category/deletecategory/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"Application/json"
        }
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err)})
}
export const getProduct=()=>{
    return fetch(`${API}/product/getproduct`)
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const deleteproduct=(id)=>{
    return fetch(`${API}/product/deleteproduct/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"Application/json"
        }
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err)})
}
export const addproduct=(product)=>{
    return fetch(`${API}/product/addproduct`,{
        method:"POST",
        body:product
    })
    .then(res=>{return res.json()})
    .catch(error=>console.log(error))
}
export const getproductdetail=(id)=>{
    return fetch(`${API}/product/getproductdetail/${id}`)
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const updateproduct=(id,product)=>{
    return fetch(`${API}/product/updateproduct/${id}`,{
        method:"PUT",
        body:product
    })
    .then(res=> res.json())
    .catch(error=>console.log(error))
}
export const getuser=()=>{
    return fetch(`${API}/user/getuser`)
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const deleteuser=(id)=>{
    return fetch(`${API}/user/deleteuser/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"Application/json"
        }
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err)})
}
export const getuserdetail=(id)=>{
    return fetch(`${API}/user/singleuserdetail/${id}`)
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const updateuser=(id,username,email)=>{
    let user={username,email}
    return fetch(`${API}/user/updateuser/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const getallproduct=()=>{
    return fetch(`${API}/product/getproduct`)
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}