import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const ViewAndDeleteDoctors = () => {
  const [tableItems, setTableItems] = useState([]);
  const navigate = useNavigate();
  const doctortoken = localStorage.getItem("doctortoken")

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
  // if(!doctortoken){
  //   return <Navigate to = "/PatientSignIn"/>
  // }
  return (
    <>
      <div class="container-md">
        <br />
        <h1 class="text-success">Doctors Info</h1>
        <br />
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">doc_id</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Age</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {tableItems.map((doctors) => (
              <tr>
                <th scope="row">{doctors.doc_id}</th>
                <td>{doctors.doctorName}</td>
                <td>{doctors.age}</td>
                <td>{doctors.phoneNumber}</td>
                <td>{doctors.gender}</td>
                <td>{doctors.address}</td>
                <td>{doctors.email}</td>
                <td>{doctors.department}</td>

                <th scope="col">
                  <button
                    type="button"
                    onClick={()=>{navigate("/Doctor/ViewOneDoctor", { state: { doctors } });}}
                    class="btn btn-outline-success"
                  >
                    View
                  </button>
                  </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewAndDeleteDoctors;
