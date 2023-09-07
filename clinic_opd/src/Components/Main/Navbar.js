import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ViewDoctors">Our Doctors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactHospital">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/PatientSignIn">Patient SignIn</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/DoctorSignIn">Doctor SignIn</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SignIn"> Admin SignIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;





