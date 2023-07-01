import { getUserAuthData } from 'entities/User';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Modal } from 'shared/ui/Modal/Modal';

interface ProtectedRouteProps {

}

const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
    const auth = useSelector(getUserAuthData);
    if (!auth) {
        alert('Необходимо авторизоваться');
        return <Navigate to="/" />;
    }
    return (
        <Outlet />
    );
};

export default ProtectedRoute;
