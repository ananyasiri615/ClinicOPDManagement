import React, { useState } from "react";
import axios from "axios";
import "./DoctorRegistrationPage.css";
import { useNavigate, Navigate } from "react-router-dom";

function DoctorRegistrationPage() {
  const [doctorName, setDoctorName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState({});  
  const token = localStorage.getItem("adminToken")
  const navigate = useNavigate(); // Initialize history

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
    if (!doctorName) {
      newErrors.doctorName = "Doctor Name is required";
    }
    if (!age) {
      newErrors.age = "Age is required";
    }else if (parseInt(age) < 0) {
      newErrors.age = "Age should not be negative";
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
    if (!department) {
      newErrors.department = "Department is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }else {
      // Check if email is already present in the database
      // You can make a GET request to your server to check this
      axios
        .get(`http://localhost:8081/doctors/check-email?email=${email}`)
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

    const registrationData = {
      doctorName: doctorName,
      age: age,
      gender: gender,
      phoneNumber: phoneNumber,
      address: address,
      department: department,
      email: email,
      password: password,
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
  if(!token){
    return <Navigate to = "/SignIn"/>
  }

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
            {errors.doctorName && (
              <div className="error-message">{errors.doctorName}</div>
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
            />
            {errors.age && <div className="error-message">{errors.age}</div>}
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
            />
            {errors.address && (
              <div className="error-message">{errors.address}</div>
            )}
          </div>

          <div className="form__input department">
            <label className="form__label" htmlFor="department">
              Department
            </label>
            <input
              type="department"
              id="department"
              className="form__input"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Department"
            />
            {errors.department && (
              <div className="error-message">{errors.department}</div>
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
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
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

export default DoctorRegistrationPage;
