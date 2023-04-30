import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log('Private route location: ', location);
    if (loading) {
        return <Spinner animation="border" variant="primary" />;
    }

    if (user) return children;

    return <Navigate state={{from: location}} replace to="/login"/>
};

export default PrivateRoute;