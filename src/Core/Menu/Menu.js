import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, matchPath, useLocation } from 'react-router-dom';
import './Menu.css';

// API
import { isAuthenticate, signOut } from '../../Auth/index';

// Import Logo.png
import Logo from '../../images/Logo-1.png';


const Menu = () => {

    // For Active Path Location in Menu
    const { pathname } = useLocation();
    const isActive = (path) => {
        if(matchPath(pathname, path)?.pathname === path){
            return { borderBottom: "1px solid #20232A" };
        }
    }

    return (
        <div className="navbar_nav">
            <Navbar bg="light" variant="light" expand="lg" className='custom-color'>
                <Container >
                    <Navbar.Brand as={Link} to="/"><img src={Logo} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="justify-content-end flex-grow-1 pe-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/" style={isActive("/")}><span className='navItem'>Home</span></Nav.Link>

                            {/* Admin DashBoard */}
                            {isAuthenticate() && isAuthenticate().user.role === 1 &&(
                                <Nav.Link as={Link} to="/admin/dashboard" style={isActive("/admin/dashboard")}><span className='navItem'>DashBoard</span></Nav.Link>
                            )}

                            {/* USER DashBoard */}
                            {isAuthenticate() && isAuthenticate().user.role === 0 &&(
                                <Nav.Link as={Link} to="/admin/dashboard" style={isActive("/admin/dashboard")}><span className='navItem'>Profile</span></Nav.Link>
                            )}

                            {/* SIGN-In Sign-UP */}
                            {!isAuthenticate() && (
                                <>
                                {" "}
                                <Nav.Link as={Link} to="/signin" style={isActive("/signin")}><span className='navItem'>Signin</span></Nav.Link>
                                <Nav.Link as={Link} to="/signup" style={isActive("/signup")}><span className='navItem'>Signup</span></Nav.Link> 
                                </>
                            )}

                            {/* FOR LOGOUT */}
                            {isAuthenticate() && (
                                <>
                                {" "}
                                <Nav.Link onClick={() => {
                                    signOut(() => {
                                        console.log("Hello");
                                    })
                                }} as={Link} to="/" 
                                >
                                    <span className='navItem'>Logout</span></Nav.Link>
                                </>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;