import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then( () => navigate("/category/0"))
            .catch()
    }

    return (
        <Container>
            <Navbar expand="lg" className="mt-3">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/category/0">
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login">
                            {
                                user ?
                                    <>
                                        <FaUserCircle style={{ fontSize: '50px', marginRight: '10px' }} />
                                        <Link to=""><button onClick={handleLogout} className="login-btn bg-warning">Logout</button></Link>
                                    </> :
                                    <>
                                        <Link to={`/login`}><button className="login-btn">Login</button></Link>
                                    </>
                            }

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Container>
    );
};

export default NavigationBar;