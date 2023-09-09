import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Admin/SignIn";
import DoctorRegistrationPage from "./Components/Doctor/Registration/DoctorRegistrationPage";
import DoctorSignIn from "./Components/Doctor/SignIn/DoctorSignIn";
import HomePage from "./Components/Main/Home/HomePage";
import Navbar from "./Components/Main/Navbar";
import ViewDoctors from "./Components/Doctor/CRUD/ViewDoctors";
import SuccessAnimation from "./Components/Main/SuccessAnimation";
import AppointmentsPage from "./Components/Appointment/AppointmentsPage";
import PatientRegistrationPage from "./Components/Patient/Registration/PatientRegistrationPage";
import PatientSignIn from "./Components/Patient/SignIn/PatientSignIn";
import ViewAndDeleteDoctors from "./Components/Doctor/CRUD/ViewAndDeleteDoctors";
import ViewOneDoctor from "./Components/Doctor/CRUD/ViewOneDoctor";
import UpdateDoctor from "./Components/Doctor/CRUD/UpdateDoctor";
import ViewOnePatient from "./Components/Patient/CRUD/ViewOnePatient";
import ViewAndDeletePatients from "./Components/Patient/CRUD/ViewAndDeletePatients";
import UpdatePatient from "./Components/Patient/CRUD/UpdatePatient";
import ViewAppointments from "./Components/Appointment/CRUD/ViewAppointments";
import ViewOneAppointment from "./Components/Appointment/CRUD/ViewOneAppointment";
import UpdateAppointments from "./Components/Appointment/CRUD/UpdateAppointments";
import ViewAndDeleteAppointments from "./Components/Appointment/CRUD/ViewAndDeleteAppointments";
import ViewPatient from "./Components/Patient/CRUD/ViewPatient.js";
import CreateSchedule from "./Components/Schedule/CreateSchedule";
import ViewAndDeleteSchedules from "./Components/Schedule/CRUD/ViewAndDeleteSchedules";
import ViewSchedules from "./Components/Schedule/CRUD/ViewSchedules";
import ViewOneSchedule from "./Components/Schedule/CRUD/ViewOneSchedule";
import UpdateSchedule from "./Components/Schedule/CRUD/UpdateSchedule";
import DoctorNavbar from "./Components/Main/DoctorNavbar";
import PatientNavbar from "./Components/Main/PatientNavbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<PatientRegistrationPage />} />
        <Route
          path="/registrationDoctor"
          element={<DoctorRegistrationPage />}
        />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/PatientSignIn" element={<PatientSignIn />} />
        <Route path="/AppointmentsPage" element={<AppointmentsPage />} />
        <Route path="/success" element={<SuccessAnimation />} />
        <Route path="/DoctorSignIn" element={<DoctorSignIn />} />
        
        <Route path="/ViewAppointments" element={<ViewAppointments />} />
        <Route path="/ViewOneAppointment" element={<ViewOneAppointment />} />
        <Route path="/UpdateAppointments" element={<UpdateAppointments />} />
        <Route
          path="/ViewAndDeleteAppointments"
          element={<ViewAndDeleteAppointments />}
        />
        <Route path="/CreateSchedule" element={<CreateSchedule />} />
        <Route
          path="/ViewAndDeleteSchedules"
          element={<ViewAndDeleteSchedules />}
        />
        <Route path="/ViewOneSchedule" element={<ViewOneSchedule />} />
        <Route path="/ViewSchedules" element={<ViewSchedules />} />
        <Route path="/UpdateSchedule" element={<UpdateSchedule />} />

        //DoctorNavbar
        <Route path="/Doctor" element={<DoctorNavbar />}>
          <Route
            path="/Doctor/ViewAndDeleteDoctors"
            element={<ViewAndDeleteDoctors />}
          />
          <Route path="/Doctor/ViewPatient" element={<ViewPatient />} />
          <Route path="/Doctor/ViewOneDoctor" element={<ViewOneDoctor />} />
          <Route path="/Doctor/UpdateDoctor" element={<UpdateDoctor />} />
        </Route>

        //PatientNavbar
        <Route path="/Patient" element={<PatientNavbar />}>
          <Route
            path="/Patient/ViewAndDeletePatients"
            element={<ViewAndDeletePatients />}
          />
          <Route path="/Patient/ViewDoctor" element={<ViewDoctors />} />
          <Route path="/Patient/ViewOnePatient" element={<ViewOnePatient />} />
          <Route path="/Patient/UpdatePatient" element={<UpdatePatient />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
