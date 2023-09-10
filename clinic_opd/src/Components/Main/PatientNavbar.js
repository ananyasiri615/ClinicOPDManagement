import React from "react";
import { Link, Outlet } from "react-router-dom";

const PatientNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Patient/ViewDoctors">
                  Our Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Patient/ViewAndDeletePatients">
                  Edit Patients Info
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Patient/AppointmentsPage">
                  Book Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Patient/ViewAndDeleteAppointments">
                  Edit Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Patient/ViewSchedules">
                  View Doctor Schedules
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default PatientNavbar;
