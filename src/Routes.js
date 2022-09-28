import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

// IMPORT COMPONENTS
import Signup from "./User/Signup";
import Signin from "./User/Signin";
import Home from './Core/Home/Home';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/signin'} element={<Signin />}/>
            <Route path={'/signup'} element={<Signup />}/>
        </Routes>   
    </BrowserRouter>
  )
}

export default Router;