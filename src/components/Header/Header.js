import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img1 from '../../../src/logo.png'



const Header = () => {
    const { user, logOut } = useAuth();
    return (


        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <img src={img1} style={{ width: '10%' }} />
                    <Navbar.Brand href="#home">National Infirmary</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/services">Service</Nav.Link>
                        <Nav.Link as={Link} to="/equipment">Equipment</Nav.Link>



                        {user.email ? <button
                            className="btn-warning rounded-3  text-primary m-4"

                            onClick={logOut}>logOut</button>

                            :

                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}



                        <Navbar.Text>Signed in as: <a >{user.displayName}</a></Navbar.Text>

                        <img src={user.photoURL} className="m-3 rounded-circle" style={{ width: '40px' }} alt="" />
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>

    );
};
export default Header;