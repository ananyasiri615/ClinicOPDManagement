import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ViewDoctors.css";
import { Navigate } from "react-router-dom";


const ViewDoctors2 = () => {
  const [tableItems, setTableItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("doctorName"); // Default search by doctor name
  const token = localStorage.getItem("adminToken")

  const getAllDoctors = () => {
    axios
      .get("http://localhost:8081/doctors/all")
      .then((response) => {
        console.log(response.data);
        setTableItems(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getAllDoctors(), []);
  if(!token){
    return <Navigate to = "/SignIn"/>
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredDoctors = tableItems.filter((doctor) => {
    const doctorName = doctor.doctorName.toLowerCase();
    const department = doctor.department.toLowerCase();
    const query = searchQuery.toLowerCase();

    if (searchField === "doctorName") {
      return doctorName.includes(query);
    } else if (searchField === "department") {
      return department.includes(query);
    }

    return false;
  });

  return (
    <>
      <div className="container-md">
        <br />
        <h1 className="text">Our Doctors</h1>
        <br />
        <div>
          <label htmlFor="searchField">Search by:</label>
          <select
            id="searchField"
            onChange={handleSearchFieldChange}
            value={searchField}
            style={{ marginLeft: "10px" }}
          >
            <option value="doctorName">Doctor Name</option>
            <option value="department">Department</option>
          </select>
        </div>
        <input
          type="text"
          placeholder={`Search by ${searchField}...`}
          onChange={handleSearch}
          value={searchQuery}
          style={{
            marginLeft: "10px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">doc_id</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doctors) => (
              <tr key={doctors.doc_id}>
                <th scope="row">{doctors.doc_id}</th>
                <td>{doctors.doctorName}</td>
                <td>{doctors.email}</td>
                <td>{doctors.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewDoctors2;
