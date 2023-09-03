import React, { useState } from "react";
import axios from "axios";
import "./PatientRegistrationPage.css";
import { useNavigate } from "react-router-dom";


function PatientRegistrationPage() {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate(); // Initialize history


  const handleDateOfBirthChange = (event) => {
    const dob = event.target.value;
    setDateOfBirth(dob);

    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      const calculatedAge = today.getFullYear() - birthDate.getFullYear();
      setAge(calculatedAge);
    } else {
      setAge("");
    }
  };

  const handlePhoneNumberChange = (event) => {
    let number = event.target.value.replace(/\D/g, "");
    if (number.length > 10) {
      number = number.slice(0, 10);
    }
    setPhoneNumber(number);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "patientName") {
      setPatientName(value);
    }
    if (id === "age") {
      setAge(value);
    }
    if (id === "gender") {
      setGender(value);
    }
    if (id === "phoneNumber") {
      setPhoneNumber(value);
    }
    if (id === "address") {
      setAddress(value);
    }
    if (id === "medicalHistory") {
      setMedicalHistory(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "dateOfBirth") {
      setDateOfBirth(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleRegistrationSubmit = () => {
    // event.preventDefault()
    // const data = new FormData(event.currentTarget);
    // console.log({"patientName": data.get("patientName")})
    // Check if the password and confirm password fields match
    if (password !== confirmPassword) {
      // Passwords do not match, display an error message or take appropriate action
      console.error("Passwords do not match");
      // You can also show a user-friendly error message to the user
      // For example, set an error state and display it on your form
      // setError("Passwords do not match");
      return; // Prevent the form from being submitted
    }
    // Create an object with the data you want to send to the server
    const registrationData = {
      "patientName": patientName,
      "age":age,
      "gender": gender,
      "phoneNumber": phoneNumber,
      "address" : address,
      "medicalHistory": medicalHistory,
      "email": email,
      "password" : password,
      "dateOfBirth": dateOfBirth,
    };

    // Make a POST request using Axios
    axios
      .post("http://localhost:8081/patients/create", registrationData)
      .then((response) => {
        // Handle a successful response, e.g., show a success message
        console.log("Registration successful", response.data);
        navigate("/success");

      })
      .catch((error) => {
        // Handle any errors, e.g., display an error message
        console.error("Registration failed", error);
      });
  };

  return (
    <div className="register">
      <div className="form" onSubmit={handleRegistrationSubmit}>
        <h2>Patient Registration Details</h2>
        <div className="form-body">
          <div className="form__input patientName">
            <label className="form__label" htmlFor="patientName">
              Patient Name:
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              className="form__input"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
              placeholder="Patient Name"
            />
          </div>
          <div className="flex-container">
            <div className="dob-container">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={handleDateOfBirthChange}
                required
              />
            </div>
            <div className="age-container">
              <label htmlFor="age">Age:</label>
              <input type="number" id="age" value={age} disabled />
            </div>
          </div>

          <div className="form__input gender">
            <label className="form__label" htmlFor="gender">
              Gender:{" "}
            </label>
            <select
              id="gender"
              className="form__input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form__input phoneNumber">
            <label className="form__label" htmlFor="phoneNumber">
              Phone Number:{" "}
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="form__input"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Phone number with 10 digits"
              required
            />
          </div>

          <div className="form__input address">
            <label className="form__label" htmlFor="address">
              Address{" "}
            </label>
            <input
              type="text"
              id="address"
              className="form__input"
              value={address}
              onChange={(e) => handleInputChange(e)}
              placeholder="Address with pincode"
            />
          </div>
          <div className="form__input medicalHistory">
            <label className="form__label" htmlFor="medicalHistory">
              Medical History{" "}
            </label>
            <input
              type="text"
              id="medicalHistory"
              className="form__input"
              value={medicalHistory}
              onChange={(e) => handleInputChange(e)}
              placeholder=""
            />
          </div>

          <div className="form__input email">
            <label className="form__label" htmlFor="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
            />
          </div>
          <div className="form__input password">
            <label className="form__label" htmlFor="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
            />
          </div>
          <div className="form__input confirm-password">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div class="submit">
          <button
            onClick={() => handleRegistrationSubmit()}
            type="submit"
            class="btn"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientRegistrationPage;
