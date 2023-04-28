import React from 'react';
import './Header.css';
import logo from '/public/img/logo.png';
import moment from 'moment/moment';

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
        </div>
    );
};

export default Header;