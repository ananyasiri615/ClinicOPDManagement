import React, { useState } from 'react';
import './DoctorSignIn.css'; // Make sure you have created this CSS file for styling

function DoctorSignIn() {
    const [doctorEmail, setDoctorEmail] = useState('');
    const [doctorPassword, setDoctorPassword] = useState('');

    const handleDoctorSubmit = async (event) => {
        event.preventDefault();
        // Call API to validate doctor credentials (using doctorEmail and doctorPassword)
        // Redirect or handle successful login
    };

    return (
        <div className="admin-login-container">
            <div className="login-card">
                <h2 className="card-title text-center">Doctor Login</h2>
                <form onSubmit={handleDoctorSubmit}>
                    <div className="mb-3">
                        <label htmlFor="doctorEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="doctorEmail" value={doctorEmail} onChange={(e) => setDoctorEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="doctorPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="doctorPassword" value={doctorPassword} onChange={(e) => setDoctorPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    );
}

export default DoctorSignIn;
