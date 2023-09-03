import React, { useState } from "react";
import axios from "axios";

function DoctorRegistrationPage() {
  const [doctorData, setDoctorData] = useState({
    doctorName: "",
    age: "",
    gender: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
    department: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleDoctorRegistrationSubmit = () => {
    // Make a POST request using Axios
    axios
      .post("http://localhost:8081/doctors/create", doctorData)
      .then((response) => {
        // Handle a successful response
        console.log("Doctor registration successful", response.data);

        // You can also redirect to a success page or perform other actions
      })
      .catch((error) => {
        // Handle errors
        console.error("Doctor registration failed", error);
        // You can also show an error message to the user
      });
  };

  return (
    <div className="register">
      <div className="form">
        <h2>Doctor Registration Details</h2>
        <div className="form-body">
          {/* Doctor registration form */}
          <div className="form__input">
            <label className="form__label" htmlFor="doctorName">
              Doctor Name:
            </label>
            <input
              type="text"
              id="doctorName"
              name="doctorName"
              className="form__input"
              value={doctorData.doctorName}
              onChange={handleInputChange}
              required
              placeholder="Doctor Name"
            />
          </div>
          <div className="form__input">
            <label className="form__label" htmlFor="age">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="form__input"
              value={doctorData.age}
              onChange={handleInputChange}
              required
              placeholder="Age"
            />
          </div>
          <div className="form__input gender">
            <label className="form__label">Gender:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={doctorData.gender === "male"}
                  onChange={handleInputChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={doctorData.gender === "female"}
                  onChange={handleInputChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={doctorData.gender === "other"}
                  onChange={handleInputChange}
                />
                Other
              </label>
            </div>
          </div>
          <div className="form__input">
            <label className="form__label" htmlFor="phoneNumber">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="form__input"
              value={doctorData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone number with 10 digits"
              required
            />
          </div>
          <div className="form__input">
            <label className="form__label" htmlFor="address">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form__input"
              value={doctorData.address}
              onChange={handleInputChange}
              placeholder="Address with pincode"
            />
          </div>
          <div className="form__input">
            <label className="form__label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form__input"
              value={doctorData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="form__input">
            <label className="form__label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form__input"
              value={doctorData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="form__input">
            <label className="form__label" htmlFor="department">
              Department:
            </label>
            <input
              type="text"
              id="department"
              name="department"
              className="form__input"
              value={doctorData.department}
              onChange={handleInputChange}
              placeholder="Department"
            />
          </div>
          <div className="submit">
            <button
              type="button"
              onClick={handleDoctorRegistrationSubmit}
              className="btn"
            >
              Register as Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegistrationPage;
