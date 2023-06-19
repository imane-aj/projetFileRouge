import {  Navigate } from 'react-router-dom';
import { getCookie } from '../../Utils';

const ProtectedRoute = ({ element: Element, roles, ...rest }) => {
  const userRole = localStorage.getItem('role');
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
