
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';

const AuthRoutes = ({ element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default AuthRoutes;