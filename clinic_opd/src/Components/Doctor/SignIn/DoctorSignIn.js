import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./DoctorSignIn.css"

function DoctorSignIn() {
  const [login, setLogin] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleDoctorSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userInput = {
      email: Email,
      password: Password,
    };

    // Make a POST request to the backend /login endpoint
    console.log(userInput);
    axios
      .post("http://localhost:8081/doctors/login", userInput)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setLogin(true);
          localStorage.setItem("doctortoken", response.data.doc_id);
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
    return <Navigate to="/ViewAndDeleteDoctors" />;
  }

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <i className="bi bi-clipboard-pulse" />
        <h2 className="card-title text-center">Doctor Login</h2>
        <form onSubmit={handleDoctorSubmit}>
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
            Don't have an account? Contact the admin
          </p>
        </form>
      </div>
    </div>
  );
}

export default DoctorSignIn;
