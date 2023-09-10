import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Admin/SignIn";
import DoctorRegistrationPage from "./Components/Doctor/Registration/DoctorRegistrationPage";
import DoctorSignIn from "./Components/Doctor/SignIn/DoctorSignIn";
import HomePage from "./Components/Main/Home/HomePage";
import AboutUs from "./Components/Main/Home/AboutUs";
import ContactUs from "./Components/Main/Home/ContactUs";
import Navbar from "./Components/Main/Navbar";
import ViewDoctors2 from "./Components/Doctor/CRUD/ViewDoctors2";
import ViewDoctors1 from "./Components/Doctor/CRUD/ViewDoctors1";
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
import ViewAppointments1 from "./Components/Appointment/CRUD/ViewAppointments1";
import ViewAppointments from "./Components/Appointment/CRUD/ViewAppointments";
import ViewOneAppointment from "./Components/Appointment/CRUD/ViewOneAppointment";
import UpdateAppointments from "./Components/Appointment/CRUD/UpdateAppointments";
import ViewAndDeleteAppointments from "./Components/Appointment/CRUD/ViewAndDeleteAppointments";
import ViewPatient from "./Components/Patient/CRUD/ViewPatient";
import ViewPatient1 from "./Components/Patient/CRUD/ViewPatient1";
import CreateSchedule from "./Components/Schedule/CreateSchedule";
import ViewAndDeleteSchedules from "./Components/Schedule/CRUD/ViewAndDeleteSchedules";
import ViewSchedules1 from "./Components/Schedule/CRUD/ViewSchedules1";
import ViewSchedules from "./Components/Schedule/CRUD/ViewSchedules";
import ViewOneSchedule from "./Components/Schedule/CRUD/ViewOneSchedule";
import UpdateSchedule from "./Components/Schedule/CRUD/UpdateSchedule";
import DoctorNavbar from "./Components/Main/DoctorNavbar";
import PatientNavbar from "./Components/Main/PatientNavbar";
import AdminNavbar from "./Components/Main/AdminNavbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar/><HomePage /></>} />
        <Route path="/registration" element={<><Navbar/><PatientRegistrationPage /></>} />
        <Route path="/SignIn" element={<><Navbar/><SignIn /></>} />
        <Route path="/PatientSignIn" element={<><Navbar/><PatientSignIn /></>} />
        <Route path="/DoctorSignIn" element={<><Navbar/><DoctorSignIn /></>} />
        <Route path="/AboutUs" element={<><Navbar/><AboutUs /></>} />
        <Route path="/ContactUs" element={<><Navbar/><ContactUs /></>} />
        <Route path="/ViewDoctors1" element={<><Navbar/><ViewDoctors1 /></>} />
        <Route path="/success" element={<SuccessAnimation />} />

        //DoctorNavbar
        <Route path="/Doctor" element={<DoctorNavbar />}>
          <Route path="/Doctor/ViewAndDeleteDoctors" element={<ViewAndDeleteDoctors />}/>
          <Route path="/Doctor/ViewPatient" element={<ViewPatient />} />
          <Route path="/Doctor/ViewOneDoctor" element={<ViewOneDoctor />} />
          <Route path="/Doctor/UpdateDoctor" element={<UpdateDoctor />} />
          <Route path="/Doctor/CreateSchedule" element={<CreateSchedule />} />
          <Route path="/Doctor/ViewAndDeleteSchedules" element={<ViewAndDeleteSchedules />}/>
          <Route path="/Doctor/ViewOneSchedule" element={<ViewOneSchedule />} />
          <Route path="/Doctor/UpdateSchedule" element={<UpdateSchedule />} />
          <Route path="/Doctor/ViewAppointments" element={<ViewAppointments />} />
        </Route>

        //PatientNavbar
        <Route path="/Patient" element={<PatientNavbar />}>
          <Route path="/Patient/ViewAndDeletePatients" element={<ViewAndDeletePatients />}/>
          <Route path="/Patient/ViewDoctors" element={<ViewDoctors />} />
          <Route path="/Patient/ViewOnePatient" element={<ViewOnePatient />} />
          <Route path="/Patient/UpdatePatient" element={<UpdatePatient />} />
          <Route path="/Patient/AppointmentsPage" element={<AppointmentsPage />} />
          <Route path="/Patient/ViewOneAppointment" element={<ViewOneAppointment />} />
          <Route path="/Patient/UpdateAppointments" element={<UpdateAppointments />} />
          <Route path="/Patient/ViewAndDeleteAppointments" element={<ViewAndDeleteAppointments />}/>
          <Route path="/Patient/ViewSchedules" element={<ViewSchedules />} />
        </Route>

        //AdminNavbar
        <Route path="/Admin" element={<AdminNavbar />}>
          <Route path="/Admin/registrationDoctor" element={<><DoctorRegistrationPage /></>}/>
          <Route path="/Admin/ViewAppointments1" element={<ViewAppointments1 />} />
          <Route path="/Admin/ViewSchedules1" element={<ViewSchedules1 />} />
          <Route path="/Admin/ViewDoctor2" element={<ViewDoctors2 />} />
          <Route path="/Admin/ViewPatient1" element={<ViewPatient1 />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
