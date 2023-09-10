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
  const [errors, setErrors] = useState({});
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

  const handleRegistrationSubmit = () => {
    const newErrors = {};

    // Check required fields
    if (!patientName) {
      newErrors.patientName = "Patient Name is required";
    }
    if (!dateOfBirth) {
      newErrors.dateOfBirth = "Date Of Birth is required";
    }
    if (!gender) {
      newErrors.gender = "Gender is required";
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    }
    if (!address) {
      newErrors.address = "Address is required";
    }
    if (!medicalHistory) {
      newErrors.medicalHistory = "Medical History is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }else {
      // Check if email is already present in the database
      // You can make a GET request to your server to check this
      axios
        .get(`http://localhost:8081/patients/check-email?email=${email}`)
        .then((response) => {
          if (response.data.exists) {
            newErrors.email = "Email is already registered";
          }
        })
        .catch((error) => {
          console.error("Error checking email:", error);
        });
      }
    if (!password) {
      newErrors.password = "Password is required";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }

    // Check if the password and confirm password fields match
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters with 1 lowercase, 1 uppercase, 1 number, and 1 special character";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // If there are validation errors, set them in the state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear any previous errors
    setErrors({});

    // Create an object with the data you want to send to the server
    const registrationData = {
      patientName: patientName,
      age: age,
      gender: gender,
      phoneNumber: phoneNumber,
      address: address,
      medicalHistory: medicalHistory,
      email: email,
      password: password,
      dateOfBirth: dateOfBirth,
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
            {errors.patientName && (
            <div className="error-message">{errors.patientName}</div>
          )}
          </div>

          <div className="dob-container">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              required
            />
            {errors.dateOfBirth && (
            <div className="error-message">{errors.dateOfBirth}</div>
          )}
          </div>

          <div className="form__input age">
            <label className="form__label" htmlFor="age">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="form__input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              placeholder="Age"
              disabled
            />
          </div>

          <div className="form__input gender">
            <label className="form__label" htmlFor="gender">
              Gender:
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
            {errors.gender && (
            <div className="error-message">{errors.gender}</div>
          )}
          </div>

          <div className="form__input phoneNumber">
            <label className="form__label" htmlFor="phoneNumber">
              Phone Number:
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
            {errors.phoneNumber && (
            <div className="error-message">{errors.phoneNumber}</div>
          )}
          </div>

          <div className="form__input address">
            <label className="form__label" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="form__input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address with pincode"
              required
            />
            {errors.address && (
            <div className="error-message">{errors.address}</div>
          )}
          </div>

          <div className="form__input medicalHistory">
            <label className="form__label" htmlFor="medicalHistory">
              Medical History
            </label>
            <input
              type="text"
              id="medicalHistory"
              className="form__input"
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
              placeholder="Medical History"
              required
            />
            {errors.medicalHistory && (
            <div className="error-message">{errors.medicalHistory}</div>
          )}
          </div>

          <div className="form__input email">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            {errors.email && (
            <div className="error-message">{errors.email}</div>
          )}
          </div>

          <div className="form__input password">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
          </div>
          
          <div className="form__input confirm-password">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            {errors.confirmPassword && (
            <div className="error-message">{errors.confirmPassword}</div>
          )}
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
