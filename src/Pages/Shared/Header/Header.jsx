import React from 'react';
import './Header.css';
import logo from '/public/img/logo.png';
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";

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
            </div>
        </div>
    );
};

export default Header;