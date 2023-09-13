import React, { useState } from "react";
import { Link, Outlet, Navigate } from "react-router-dom";

const AdminNavbar = () => {
  const [loginStatus, setLoginStatus] = useState(true);

  const handleLogout = () => {
    localStorage.clear();
    setLoginStatus(false);
  }
  if(loginStatus === false){
    return <Navigate to="/" />;
  }
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
                <Link className="nav-link" to="/Admin/registrationDoctor">
                  Register A Doctor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Admin/ViewDoctor2">
                  View Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Admin/ViewPatient1">
                  View Patients
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Admin/ViewAppointments1">
                  View Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Admin/ViewSchedules1">
                  View Schedules
                </Link>
              </li>
              <li>
              <button
                    type="button"
                    class="btn btn-light dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Logout
                  </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Logout
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Are you sure you want to Logout?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-success"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-success"  onClick={handleLogout} data-bs-dismiss="modal">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AdminNavbar
