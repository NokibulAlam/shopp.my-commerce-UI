import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// Import API
import {isAuthenticate} from './index';

const PrivateRoute = ({component, path, children, ...rest}) => {

    return isAuthenticate() ? <Outlet /> : <Navigate to={{ pathname: "/signin" }} />;

}

export default PrivateRoute;