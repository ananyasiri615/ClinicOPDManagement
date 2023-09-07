import React, { useState } from "react";
import axios from "axios";
import "./DoctorRegistrationPage.css";
import { useNavigate } from "react-router-dom";

function DoctorRegistrationPage() {
  const [doctorName, setDoctorName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate(); // Initialize history

  const handlePhoneNumberChange = (event) => {
    let number = event.target.value.replace(/\D/g, "");
    if (number.length > 10) {
      number = number.slice(0, 10);
    }
    setPhoneNumber(number);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "doctorName") {
      setDoctorName(value);
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
    if (id === "department") {
      setDepartment(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleRegistrationSubmit = () => {
    // event.preventDefault()
    // const data = new FormData(event.currentTarget);
    // console.log({"doctorName": data.get("doctorName")})
    // Create an object with the data you want to send to the server
    const registrationData = {
      "doctorName": doctorName,
      "age":age,
      "gender": gender,
      "phoneNumber": phoneNumber,
      "address" : address,
      "department" : department,
      "email": email,
      "password" : password,
    };

    // Make a POST request using Axios
    axios
      .post("http://localhost:8081/doctors/create", registrationData)
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
        <h2>Doctor Registration Details</h2>
        <div className="form-body">
          <div className="form__input doctorName">
            <label className="form__label" htmlFor="doctorName">
              Doctor Name:
            </label>
            <input
              type="text"
              id="doctorName"
              name="doctorName"
              className="form__input"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              required
              placeholder="Doctor Name"
            />
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
              onChange={(e) => handleInputChange(e)}
              placeholder="Address with pincode"
            />
          </div>
          <div className="form__input department">
            <label className="form__label" htmlFor="department">
            Department 
            </label>
            <input
              type="department"
              id="department"
              className="form__input"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Department"
            />
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
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
            />
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
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
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

export default DoctorRegistrationPage;
