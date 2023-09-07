import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewAndDeleteAppointments = () => {
  const [tableItems, setTableItems] = useState([]);
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState({ field: "", ascending: true });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("patientName"); // Default search by patient name

  const sortTable = (field) => {
    let sortedItems = [...tableItems];
    sortedItems.sort((a, b) => {
      if (a[field] < b[field]) return sortBy.ascending ? -1 : 1;
      if (a[field] > b[field]) return sortBy.ascending ? 1 : -1;
      return 0;
    });

    setTableItems(sortedItems);
    setSortBy({ field, ascending: !sortBy.ascending });
  };

  const getAllAppointments = () => {
    axios
      .get("http://localhost:8081/appointment/allAppointments")
      .then((response) => {
        console.log(response.data);
        setTableItems(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getAllAppointments(), []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredAppointments = tableItems.filter((appointment) => {
    const patientName = appointment.patient
      ? appointment.patient.patientName.toLowerCase()
      : "";
    const doctorName = appointment.doctor
      ? appointment.doctor.doctorName.toLowerCase()
      : "";
    const appointmentDate = appointment.appointmentDate || "";
    const query = searchQuery.toLowerCase();

    if (searchField === "patientName") {
      return patientName.includes(query);
    } else if (searchField === "doctorName") {
      return doctorName.includes(query);
    } else if (searchField === "appointmentDate") {
      return appointmentDate.includes(query);
    }

    return false;
  });

  return (
    <>
      <div className="container-md">
        <br />
        <h1 className="text-success">Appointments Info</h1>
        <br />
        <div>
          <label htmlFor="searchField">Search by:</label>
          <select
            id="searchField"
            onChange={handleSearchFieldChange}
            value={searchField}
            style={{ marginLeft: "10px" }}
          >
            <option value="patientName">Patient Name</option>
            <option value="doctorName">Doctor Name</option>
            <option value="appointmentDate">Appointment Date</option>
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
              <th
                scope="col"
                onClick={() => sortTable("app_id")}
                className={
                  sortBy.field === "app_id"
                    ? sortBy.ascending
                      ? "ascending"
                      : "descending"
                    : ""
                }
              >
                app_id{" "}
                {sortBy.field === "app_id" && (sortBy.ascending ? "⬆" : "⬇")}
              </th>
              <th
                scope="col"
                onClick={() => sortTable("patient.patientName")}
                className={
                  sortBy.field === "patient.patientName"
                    ? sortBy.ascending
                      ? "ascending"
                      : "descending"
                    : ""
                }
              >
                patientName{" "}
                {sortBy.field === "patient.patientName" &&
                  (sortBy.ascending ? "⬆" : "⬇")}
              </th>
              <th
                scope="col"
                onClick={() => sortTable("doctor.doctorName")}
                className={
                  sortBy.field === "doctor.doctorName"
                    ? sortBy.ascending
                      ? "ascending"
                      : "descending"
                    : ""
                }
              >
                doctorName{" "}
                {sortBy.field === "doctor.doctorName" &&
                  (sortBy.ascending ? "⬆" : "⬇")}
              </th>
              <th
                scope="col"
                onClick={() => sortTable("appointmentDate")}
                className={
                  sortBy.field === "appointmentDate"
                    ? sortBy.ascending
                      ? "ascending"
                      : "descending"
                    : ""
                }
              >
                appointmentDate{" "}
                {sortBy.field === "appointmentDate" &&
                  (sortBy.ascending ? "⬆" : "⬇")}
              </th>
              <th
                scope="col"
                onClick={() => sortTable("appointmentTime")}
                className={
                  sortBy.field === "appointmentTime"
                    ? sortBy.ascending
                      ? "ascending"
                      : "descending"
                    : ""
                }
              >
                appointmentTime{" "}
                {sortBy.field === "appointmentTime" &&
                  (sortBy.ascending ? "⬆" : "⬇")}
              </th>
              <th
                scope="col"
                onClick={() => sortTable("status")}
                className={
                  sortBy.field === "status"
                    ? sortBy.ascending
                      ? "ascending"
                      : "descending"
                    : ""
                }
              >
                Status{" "}
                {sortBy.field === "status" && (sortBy.ascending ? "⬆" : "⬇")}
              </th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
          {filteredAppointments.map((appointment) => (
              <tr key={appointment.app_id}>
                <th scope="row">{appointment.app_id}</th>
                <td>
                  {appointment.patient ? appointment.patient.patientName : ""}
                </td>
                <td>
                  {appointment.doctor ? appointment.doctor.doctorName : ""}
                </td>
                 <td>
                  {appointment.appointmentDate === null
                    ? "N/A"
                    : appointment.appointmentDate}
                </td>
                <td>
                  {appointment.appointmentTime === null
                    ? "N/A"
                    : appointment.appointmentTime}
                </td>
                <td>{appointment.status}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/ViewOneAppointment", {
                        state: { appointments: appointment },
                      });
                    }}
                    className="btn btn-outline-success"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewAndDeleteAppointments;
