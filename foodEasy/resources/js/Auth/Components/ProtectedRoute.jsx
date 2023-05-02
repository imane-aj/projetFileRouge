import { Route, Navigate, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCookie } from '../../Utils';

const ProtectedRoute = ({ element: Element, roles, ...rest }) => {
  const userRole = localStorage.getItem('role');
 console.log(userRole)
  const token = getCookie('token');
  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  if (roles && token && !roles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return <Element {...rest} />;

};

export default ProtectedRoute;
