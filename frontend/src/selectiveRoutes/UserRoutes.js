import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'

const UserRoutes = () => {
  return (
    <>
        {
            (isAuthenticated() && isAuthenticated().user.role==0)?<Outlet/>:<Navigate to={'/sig'}/>
        }
    </>
  )
}

export default UserRoutes