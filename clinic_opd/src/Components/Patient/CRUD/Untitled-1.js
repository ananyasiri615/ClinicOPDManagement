import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewAndDeletePatients = () => {
  const [tableItems, setTableItems] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("");


  const getAllPatients = () => {
    axios
      .get("http://localhost:8081/patients/all")
      .then((response) => {
        console.log(response.data);
        setTableItems(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => getAllPatients(), []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPatients = tableItems.filter((patient) => {
    const patientName = patient.patientName.toLowerCase();
    const query = searchQuery.toLowerCase();

    if (searchField === "patientName") {
      return patientName.includes(query);
    }

    return false;
  });
  return (
    <>
      <div class="container-md">
        <br />
        <h1 class="text-success">Patients Info</h1>
        <br />
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
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">p_id</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Age</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Medical History</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patients) => (
              <tr key={patients.p_id}>
                <th scope="row">{patients.p_id}</th>
                <td>{patients.patientName}</td>
                <td>{patients.age}</td>
                <td>{patients.phoneNumber}</td>
                <td>{patients.gender}</td>
                <td>{patients.address}</td>
                <td>{patients.email}</td>
                <td>{patients.medicalHistory}</td>

                <th scope="col">
                  <button
                    type="button"
                    onClick={()=>{navigate("/ViewOnePatient", { state: { patients } });}}
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

export default ViewAndDeletePatients;
