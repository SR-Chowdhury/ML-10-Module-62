import React from 'react';
import NavigationBar from '../../Pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginRegister = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default LoginRegister;