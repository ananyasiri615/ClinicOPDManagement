import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./PatientSignIn.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function PatientSignIn() {
  const [login, setLogin] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handlePatientSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userInput = {
      email: Email,
      password: Password,
    };

    // Make a POST request to the backend /login endpoint
    console.log(userInput);
    axios
      .post("http://localhost:8081/patients/login", userInput)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setLogin(true);
          localStorage.setItem("patienttoken", response.data.p_id);
          console.log("User logged in:", response.data);
        } else {
          setLogin(false);
          window.alert("Invalid Credentials! Please Enter Valid Data");
          console.log("Login failed: Invalid credentials");
        }
      })
      .catch((error) => {
        window.alert("An error occurred. Please try again later.");
        console.error("An error occurred:", error);
      });
  };

  if (login === true) {
    return <Navigate to="/Patient/ViewAndDeletePatients" />;
  }

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <i className="bi1 bi-clipboard-pulse" />
        <h2 className="card-title text-center">Patient Login</h2>
        <form onSubmit={handlePatientSubmit}>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
          <p class="pb-lg-2 text-center" style={{ color: "#393f81" }}>
            Don't have an account? 
            <a href="/registration" style={{ color: "#393f81" }}>
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default PatientSignIn;
