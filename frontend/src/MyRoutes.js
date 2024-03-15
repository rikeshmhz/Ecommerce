//fakestoreapi
// jsonplaceholder-users
//dummyjso
// name,email,street,company

// bootsnipp
// vitejs.dev
// npm i react-router-dom redux react-redux redux-persist react-toastify
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Data3 from './component/axios/Data3'
import ProductDetails from './component/axios/ProductDetails'
import Data1 from './component/fetch/Data1'
import Data2 from './component/fetch/Data2'
import Usestate from './component/hooks/Usestate'
import Navbar from './component/Navbar'
import Carts from './page/Carts'
import Home from './page/Home'
// import Home1 from './page/Home1'
import Products from './page/Products'
import Data from './page/props/Data'
import Registers from './page/Registers'
import Services from './page/Services'
import Signins from './page/Signins'
import Register1 from './component/Register1'
import EmailVerification from './component/EmailVerification'
import ForgetPassword from './component/ForgetPassword'
import ResetPassword from './component/ResetPassword'
import Addcategory from './component/admin/Addcategory'
import { AdminDashboard } from './component/admin/AdminDashboard'
import Admincategory from './component/admin/Admincategory'
import UpdateCategory from './component/admin/UpdateCategory'
import Addproduct from './component/admin/Addproduct'
import Adminproduct from './component/admin/Adminproduct'
import UpdateProduct from './component/admin/UpdateProduct'
import AdminUser from './component/admin/AdminUser'
import UpdateUser from './component/admin/UpdateUser'
import AdminRoutes from './selectiveRoutes/adminRoutes'
import UserRoutes from './selectiveRoutes/UserRoutes'
import ProductDetails1 from './component/ProductDetails1'
import Shipping from './page/Shipping'
import Payment from './page/Payment'
import { PaymentSuccess } from './page/PaymentSuccess'
import Demo from './component/hooks/Demo'

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/nav' element={<Navbar/>}/>
                    <Route path='/' element={<Home/>}/>
                    {/* <Route path='/' element={<Home1/>}/> */}
                    <Route path='/pro' element={<Products/>}/>
                    <Route path='/sig' element={<Signins/>}/>
                    <Route path='/reg' element={<Registers/>}/>
                    <Route path='/ser' element={<Services/>}/>
                    <Route path='/usestate' element={<Usestate/>}/>
                    <Route path='/props' element={<Data/>}/>
                    <Route path='/fetch' element={<Data1/>}/>
                    <Route path='/fetch1' element={<Data2/>}/>
                    <Route path='/axios' element={<Data3/>}/>
                    <Route path='/product/:id' element={<ProductDetails/>}/>
                    <Route path='/Register' element={<Register1/>}/>
                    <Route path='/user/verification/:token' element={<EmailVerification/>}/>
                    <Route path='/forgetpassword' element={<ForgetPassword/>}/>
                    <Route path='/user/resetpassword/:token' element={<ResetPassword/>}/>
                    <Route path='/product1/:id' element={<ProductDetails1/>}/>

                    {/* admin route start */}
                    <Route path="/" element={<AdminRoutes/>}>
                    <Route path='/admin/addcategory' element={<Addcategory/>}/>
                    <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
                    <Route path='/admin/category' element={<Admincategory/>}/>
                    <Route path='/category/updatecategory/:id' element={<UpdateCategory/>}/>
                    <Route path='/admin/addproduct' element={<Addproduct/>}/>
                    <Route path='/admin/adminproduct' element={<Adminproduct/>}/>
                    <Route path='/admin/updateproduct/:id' element={<UpdateProduct/>}/>
                    <Route path='/admin/users' element={<AdminUser/>}/>
                    <Route path='/admin/updateuser/:id' element={<UpdateUser/>}/>
                    </Route>
                    {/* admin route end */}

                    {/* user route start */}
                    <Route path='/' element={<UserRoutes/>}>
                    <Route path='/cart' element={<Carts/>}/>
                    <Route path='/shipping' element={<Shipping/>}/>
                    <Route path='/checkout' element={<Payment/>}/>
                    <Route path='/success' element={<PaymentSuccess/>}/>
                    </Route>
                    {/* user route end */}

                    <Route path='/demo' element={<Demo/>}/>
                    


                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes