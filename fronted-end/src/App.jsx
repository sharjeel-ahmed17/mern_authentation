import React from 'react';
import { AuthProvider } from './context/auth.context';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Auth System</h1>
        <SignUp />
        <Login />
        <Dashboard />
      </div>
    </AuthProvider>
  );
}

export default App;
