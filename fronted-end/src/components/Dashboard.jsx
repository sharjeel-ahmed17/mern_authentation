import React, { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { logout } from '../api/api';

const Dashboard = () => {
    const { user, setUser } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await logout();
            setUser(null);
        } catch (error) {
            console.log('Error logging out');
        }
    };

    return (
        <div>
            <h2>Dashboard</h2>
            {user ? (
                <div>
                    <p>You are logged in with token: {user.token}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
};

export default Dashboard;
