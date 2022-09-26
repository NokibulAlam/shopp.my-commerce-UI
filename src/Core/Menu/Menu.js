import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// API
import { isAuthenticate, signOut } from '../../Auth/index';


const Menu = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Shopp.my</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="justify-content-end flex-grow-1 pe-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {!isAuthenticate() && (
                                <>
                                {" "}
                                <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
                                <Nav.Link as={Link} to="/signup">SignUp</Nav.Link> 
                                </>
                            )}

                            {isAuthenticate() && (
                                <>
                                {" "}
                                <Nav.Link as={Link} to="/logout" 
                                onClick={() => {
                                    signOut(() => {
                                        console.log("Hello");
                                    })
                                }}>
                                    Logout</Nav.Link>
                                </>
                            )}

                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;