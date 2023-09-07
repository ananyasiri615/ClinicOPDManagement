import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/Admin/SignIn';
import DoctorRegistrationPage from './Components/Doctor/Registration/DoctorRegistrationPage';
import DoctorSignIn from './Components/Doctor/SignIn/DoctorSignIn';
import HomePage from './Components/Main/Home/HomePage';
import Navbar from './Components/Main/Navbar';
import ViewDoctors from './Components/Doctor/CRUD/ViewDoctors';
import SuccessAnimation from './Components/Main/SuccessAnimation';
import AppointmentsPage from './Components/Appointment/AppointmentsPage';
import PatientRegistrationPage from './Components/Patient/Registration/PatientRegistrationPage';
import PatientSignIn from './Components/Patient/SignIn/PatientSignIn';
import ViewAndDeleteDoctors from './Components/Doctor/CRUD/ViewAndDeleteDoctors';
import ViewOneDoctor from './Components/Doctor/CRUD/ViewOneDoctor';
import UpdateDoctor from './Components/Doctor/CRUD/UpdateDoctor';
import ViewOnePatient from './Components/Patient/CRUD/ViewOnePatient';
import ViewAndDeletePatients from './Components/Patient/CRUD/ViewAndDeletePatients';
import UpdatePatient from './Components/Patient/CRUD/UpdatePatient';
import ViewAppointments from './Components/Appointment/CRUD/ViewAppointments';
import ViewOneAppointment from './Components/Appointment/CRUD/ViewOneAppointment';
import UpdateAppointments from './Components/Appointment/CRUD/UpdateAppointments';
import ViewAndDeleteAppointments from './Components/Appointment/CRUD/ViewAndDeleteAppointments';
import ViewPatient from './Components/Patient/CRUD/ViewPatient.js';

function App() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/registration" element={<PatientRegistrationPage />} />
                <Route path="/registrationDoctor" element={<DoctorRegistrationPage />} />
                <Route path="/ViewDoctors" element={<ViewDoctors />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/PatientSignIn" element={<PatientSignIn />} />
                <Route path="/AppointmentsPage" element={<AppointmentsPage />} />
                <Route path="/success" element={<SuccessAnimation />} />
                <Route path="/DoctorSignIn" element={<DoctorSignIn />} />
                <Route path="/ViewAndDeleteDoctors" element={<ViewAndDeleteDoctors />} />
                <Route path="/ViewOneDoctor" element = {<ViewOneDoctor/>} />
                <Route path="/UpdateDoctor" element = {<UpdateDoctor/>} />
                <Route path="/ViewOnePatient" element = {<ViewOnePatient/>} />
                <Route path="/UpdatePatient" element = {<UpdatePatient/>} />
                <Route path="/ViewPatient" element = {<ViewPatient/>}/>
                <Route path="/ViewAndDeletePatients" element = {<ViewAndDeletePatients/>} />
                <Route path="/ViewAppointments" element = {<ViewAppointments/>} />
                <Route path="/ViewOneAppointment" element = {<ViewOneAppointment/>} />
                <Route path="/UpdateAppointments" element = {<UpdateAppointments/>} />
                <Route path="/ViewAndDeleteAppointments" element = {<ViewAndDeleteAppointments/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
