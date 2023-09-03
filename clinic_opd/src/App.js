import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Main/Home/HomePage';
import PatientRegistrationPage from './Components/Patient/Registration/PatientRegistrationPage';
import DoctorRegistrationPage from './Components/Doctor/DoctorRegistrationPage';
import Navbar from './Components/Main/Navbar'; 
import OurDoctor from './Components/Main/OurDoctor';
import SignIn from './Components/Admin/SignIn';
import DoctorSignIn from './Components/Doctor/DoctorSignIn';
import PatientSignIn from './Components/Patient/SignIn/PatientSignIn';
import AppointmentsPage from './Components/Patient/Appointment/AppointmentsPage';
import SuccessAnimation from './Components/Main/SuccessAnimation';


function App() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/appointments" element={<AppointmentsPage />} />
                <Route path="/registration" element={<PatientRegistrationPage />} />
                <Route path="/registrationDoctor" element={<DoctorRegistrationPage />} />
                <Route path="/OurDoctor" element={<OurDoctor />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/DoctorSignIn" element={<DoctorSignIn />} />
                <Route path="/PatientSignIn" element={<PatientSignIn />} />
                <Route path="/AppointmentsPage" element={<AppointmentsPage />} />
                <Route path="/success" element={<SuccessAnimation />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
