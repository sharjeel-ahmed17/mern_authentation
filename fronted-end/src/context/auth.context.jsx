import React, { createContext, useState, useEffect } from 'react';
import { refreshToken } from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const { data } = await refreshToken();
                setUser({ token: data.accessToken });
            } catch (error) {
                console.log('No refresh token found');
            }
        };

        fetchToken();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
