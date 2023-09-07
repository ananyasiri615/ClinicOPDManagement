import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

const UpdateDoctor = () => {
  //const [readOnly, setReadonly] = useState(true);
  const navigate = useNavigate(); // Initialize history

  const location = useLocation();
  const doctors = location.state.doctors;

  // Initialize the state for the selected option
  const [doctorName, setDoctorName] = useState(doctors ? doctors.doctorName : "");
  const [age, setAge] = useState(doctors ? doctors.age : "");
  const [phoneNumber, setPhoneNumber] = useState(doctors ? doctors.phoneNumber : "");
  const [selectedGender, setSelectedGender] = useState(doctors ? doctors.gender : "");
  const [address, setAddress] = useState(doctors ? doctors.address : "");
  const [department, setDepartment] = useState(doctors ? doctors.department : "");
  const [email, setEmail] = useState(doctors ? doctors.email : "");
  const [password, setPassword] = useState(doctors ? doctors.password : "");


  // Use useEffect to set the state when doctors changes
  useEffect(() => {
    setSelectedGender(doctors ? doctors.gender : "");
  }, [doctors]);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Create an object with the updated data
    const updatedDoctorsData = {
      id: doctors.doc_id,
      doctorName,
      age,
      gender: selectedGender,
      phoneNumber,
      address,
      department,
      email,
      password
    };

    axios
      .put(
        `http://localhost:8081/doctors/update/${doctors.doc_id}`,
        updatedDoctorsData
      )
      .then((response) => {
        console.log("Success!! Data stored!", response.data);
        navigate("/success");

      })
      .catch((err) => {
        console.log("Error occured", err);
      });
  };

  return (
    <>
      <div class="container-md">
        <br />
        <p class="fw-semibold h2 text-secondary-emphasis text-center">
          Edit Doctor
        </p>
        <hr />
        <br />
        <div class="container-md px-5">
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-md-6 mb-4">
                <label
                  class="form-label text-start fw-semibold text-info fs-5"
                  for="form2Example17"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="doctorName"
                  id="form2Example17"
                  class="form-control"
                  //readOnly={readOnly}
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                />
              </div>

              <div class="col-md-6 mb-4">
                <label
                  class="form-label text-info fw-semibold fs-5"
                  for="form2Example27"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="form2Example27"
                  class="form-control"
                  //readOnly={readOnly}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-4">
                <label
                  class="form-label fw-semibold text-info fs-5"
                  for="form2Example27"
                >
                  Contact Info
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="form2Example27"
                  class="form-control"
                  //readOnly={readOnly}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-4">
                <label
                  className="form-label fw-semibold text-info fs-5"
                  htmlFor="genderSelect"
                >
                  Gender
                </label>
                <select
                  id="genderSelect"
                  className="form-select"
                  name="gender"
                  value={selectedGender}
                  onChange={handleGenderChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
                </div>
              </div>
            <div class="row">
              <div class="col-md-6 mb-4">
                <label
                  class="form-label fw-semibold text-start text-info fs-5"
                  for="form2Example17"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="form2Example17"
                  class="form-control"
                  //readOnly={readOnly}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div class="col-md-6 mb-4">
                <label
                  class="form-label fw-semibold text-start text-info fs-5"
                  for="form2Example17"
                >
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  id="form2Example17"
                  class="form-control"
                  //readOnly={readOnly}
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-6 mb-4">
                <label
                  class="form-label fw-semibold text-start text-info fs-5"
                  for="form2Example17"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="form2Example17"
                  class="form-control"
                  //readOnly={readOnly}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
            
                />
              </div>
              <div class="col-md-6 mb-4">
                <label
                  class="form-label fw-semibold text-start text-info fs-5"
                  for="form2Example17"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="form2Example17"
                  class="form-control"
                  //readOnly={readOnly}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div class="pt-1 mb-4 text-center ">
              <button
                class="btn btn-dark fw-semibold btn-lg btn-block text-light "
                type="submit"
              >
                Edit Info
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateDoctor;
