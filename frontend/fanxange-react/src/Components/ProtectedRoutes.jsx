// ProtectedRoutes.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';


const ProtectedRoutes = () => {
    const { userData } = useSelector((state) => state.user);

    return userData.authenticated === true ? <Outlet /> : <Navigate to="/" />


};

export default ProtectedRoutes;
