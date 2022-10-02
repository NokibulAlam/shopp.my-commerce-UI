import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css';

// API
import { isAuthenticate, signOut } from '../../Auth/index';

// Import Logo.png
import Logo from '../../images/Logo-1.png';

const Menu = () => {
    // console.log(window.location.pathname);
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
                            <Nav.Link as={Link} to="/"><span className='navItem'>Home</span></Nav.Link>
                            {!isAuthenticate() && (
                                <>
                                {" "}
                                <Nav.Link as={Link} to="/signin"><span className='navItem'>Signin</span></Nav.Link>
                                <Nav.Link as={Link} to="/signup"><span className='navItem'>Signup</span></Nav.Link> 
                                </>
                            )}

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