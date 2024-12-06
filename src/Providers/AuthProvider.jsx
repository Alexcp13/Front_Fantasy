import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.services';
import userService from '../services/users.services';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            authService.verifyToken(token)
                .then(async () => {
                    const decodedToken = JSON.parse(atob(token.split('.')[1]));
                    const userData = await userService.getUserById(decodedToken.id);
                    setUser(userData.data);
                    setIsAuthenticated(true);
                })
                .catch(() => {
                    logout();
                });
        }
    }, []);

    const authUser = async (token) => {
        localStorage.setItem('authToken', token);
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userData = await userService.getUserById(decodedToken.id);
        setUser(userData.data);
        setIsAuthenticated(true);
        navigate('/');
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, userId: user?._id, authUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
