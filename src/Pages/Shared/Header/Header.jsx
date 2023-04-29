import React from 'react';
import './Header.css';
import logo from '/public/img/logo.png';
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="container">

            <div className="header-top text-center">
                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <h1 className="header-title">Journalism Without Fear or Favour</h1>
                <h3 className="header-time">{moment().format('dddd, MMMM D, YYYY')}</h3>
            </div>

            <div className="header-bottom">
                <div className="marquee-section d-flex">
                    <button className="primary-btn me-1">Latest</button>
                    <Marquee>
                        I can be a React component, multiple React components, or just some text! &nbsp;&nbsp;&nbsp;
                        I can be a React component, multiple React components, or just some text.....
                    </Marquee>
                </div>
                <Navbar expand="lg" className="mt-3">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Career</Nav.Link>
                        </Nav>
                        <Nav>   
                            <Nav.Link href="#login">
                                <button className="login-btn">Login</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        </div>
    );
};

export default Header;