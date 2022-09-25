import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

// IMPORT COMPONENTS
import Signup from "./User/Signup";
import Signin from "./User/Signin";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/signin'} element={<Signin />}/>
            <Route path={'/signup'} element={<Signup />}/>
        </Routes>   
    </BrowserRouter>
  )
}

export default Router;