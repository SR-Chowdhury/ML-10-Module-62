import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    const location = useLocation();
    // console.log('Private route location: ', location);

    if (user) return children;

    return <Navigate state={{from: location}} replace to="/login"/>
};

export default PrivateRoute;