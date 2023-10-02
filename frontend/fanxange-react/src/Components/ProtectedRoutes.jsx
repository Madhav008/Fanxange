// ProtectedRoutes.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';


const ProtectedRoutes = () => {
    const { user } = useSelector((state) => state.user);
    const { authenticated } = user;
    if (user && authenticated) {
        return authenticated ? <Outlet /> : <Navigate to="/" />
    }

};

export default ProtectedRoutes;
