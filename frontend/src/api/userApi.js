import { API } from "../config"

export const userRegister=(username,email,password)=>{
    let user={username,password,email}
    return fetch(`${API}/user/register`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const emailverification=(token)=>{
    return fetch(`${API}/user/verification/${token}`,{
        method:"GET",
        headers:{
            "Content-Type":"Application/json"
        }
    })
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const forgetPassword=(email)=>{
    let user={email}
    return fetch(`${API}/user/forgetpassword`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const resetPassword=(token,password)=>{
    let user={password}
    return fetch(`${API}/user/resetpassword/${token}`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})
}
export const signin=(email,password)=>{
    let user={email,password}
    return fetch(`${API}/user/signin`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{return res.json()})
    .catch(error=>{console.log(error)})      
}
export const authenticate=(data)=>{
    localStorage.setItem('jwt',JSON.stringify(data))
}
// to check if the user is signed in or not

export const isAuthenticated=()=>{
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}

export const signout=()=>{
    localStorage.removeItem("jwt")
    return fetch(`${API}/user/signout`,{
        method:"GET",
        headers:{
            "Content-Type":"Application/json"
        }       
    })
    .then(response=>{return response.json()})
    .catch(error=>{console.log(error)})
}