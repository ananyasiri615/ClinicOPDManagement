import React, { useState } from 'react';
import './PatientSignIn.css'; // Make sure you have created this CSS file for styling

function PatientSignIn() {
    const [patientEmail, setPatientEmail] = useState('');
    const [patientPassword, setPatientPassword] = useState('');

    const handlePatientSubmit = async (event) => {
        event.preventDefault();
        // Call API to validate patient credentials (using patientEmail and patientPassword)
        // Redirect or handle successful login
    };

    return (
        <div className="admin-login-container">
            <div className="login-card">
                <h2 className="card-title text-center">Patient Login</h2>
                <form onSubmit={handlePatientSubmit}>
                    <div className="mb-3">
                        <label htmlFor="patientEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="patientEmail" value={patientEmail} onChange={(e) => setPatientEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="patientPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="patientPassword" value={patientPassword} onChange={(e) => setPatientPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    );
}

export default PatientSignIn;
