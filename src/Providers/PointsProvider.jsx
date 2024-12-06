import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';

const PointsContext = createContext({
    userPoints: 0,
    updatePoints: () => { },
    isLoading: true,
});

export const PointsProvider = ({ children }) => {
    const { user } = useAuth();
    const [userPoints, setUserPoints] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {

            setUserPoints(user.points || 0);
            setIsLoading(false);
        } else {
            setUserPoints(0);
            setIsLoading(false);
        }
    }, [user]);

    const updatePoints = (newPoints) => {

        setUserPoints(newPoints);
    };

    return (
        <PointsContext.Provider value={{ userPoints, updatePoints, isLoading }}>
            {children}
        </PointsContext.Provider>
    );
};

export const usePoints = () => useContext(PointsContext);
