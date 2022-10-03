import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

// Import API
import {isAuthenticate} from './index';

const AdminRoute = ({component, path, children, ...rest}) => {

    return isAuthenticate() && isAuthenticate().user.role === 1 ? <Outlet /> : <Navigate to={{ pathname: "/signin" }} />;
    
}

export default AdminRoute;