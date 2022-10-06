import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

// IMPORT USERs COMPONENTS
import Signup from "./User/Signup";
import Signin from "./User/Signin";
import Home from './Core/Home/Home';
import ProductPage from './Core/ProductPage/ProductPage';
import UserDashBoard from './User/UserDashBoard';

// IMPORT Admin COMPONENTS
import AdminDashBoard from './User/AdminDashBoard';
import CreateCategory from './Admin/CreateCategory';
import CreateProduct from './Admin/CreateProduct';
import ManageProducts from './Admin/ManageProducts';

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

            <Route exact path={'/create/category'} element={<AdminRoute />}>
              <Route exact path={'/create/category'} element={<CreateCategory />}/>
            </Route>

            <Route exact path={'/create/product'} element={<AdminRoute />}>
              <Route exact path={'/create/product'} element={<CreateProduct />}/>
            </Route>

            <Route exact path={'/admin/products'} element={<AdminRoute />}>
              <Route exact path={'/admin/products'} element={<ManageProducts />}/>
            </Route>

        </Routes>   
    </BrowserRouter>
  )
}

export default Router;