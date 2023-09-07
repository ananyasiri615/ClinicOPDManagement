import React, { useState } from 'react';
import './SignIn.css'; 

function SignIn() {
    const [adminUsername, setAdminUsername] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    
    const handleAdminSubmit = async (event) => {
        event.preventDefault();

        if (adminUsername === 'Admin' && adminPassword === '1234') {
            // Simulating a successful login, you can perform actual redirection or state update here
            alert('Admin logged in successfully!');
        } else {
            // Show error message
            alert('Invalid admin credentials');
        }
    };

    return (
        <div className="admin-login-container">
            <div className="login-card">
            <i className="bi bi-clipboard-pulse" />
                <h2 className="card-title text-center">Admin Login</h2>
                <form onSubmit={handleAdminSubmit}>
                    <div className="mb-3">
                        <label htmlFor="adminUsername" className="form-label">Username</label>
                        <input type="text" className="form-control" id="adminUsername" value={adminUsername} onChange={(e) => setAdminUsername(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="adminPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="adminPassword" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
