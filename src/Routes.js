import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

// IMPORT COMPONENTS
import Signup from "./User/Signup";
import Signin from "./User/Signin";
import Home from './Core/Home/Home';
import ProductPage from './Core/ProductPage/ProductPage';
import UserDashBoard from './User/UserDashBoard';
import AdminDashBoard from './User/AdminDashBoard';

// Import Protected Routing
import PrivateRoute from './Auth/PrivateRoute';
import AdminRoute from './Auth/AdminRoute';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
          
            <Route path={'/'} element={<Home />}/>
            <Route path={'/signin'} element={<Signin />}/>
            <Route path={'/signup'} element={<Signup />}/>
            <Route path={'/product/:productId'} element={<ProductPage />}/>

            <Route exact path={'/user/dashboard'} element={<PrivateRoute />}>
              <Route exact path={'/user/dashboard'} element={<UserDashBoard />}/>
            </Route>

            <Route exact path={'/admin/dashboard'} element={<AdminRoute />}>
              <Route exact path={'/admin/dashboard'} element={<AdminDashBoard />}/>
            </Route>

        </Routes>   
    </BrowserRouter>
  )
}

export default Router;