import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ViewSchedules = () => {
  const [tableItems, setTableItems] = useState([]);
  const [sortBy, setSortBy] = useState({ field: "", ascending: true });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("availability"); // Default search by schedule name
  const token = localStorage.getItem("patienttoken")

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

  const getAllSchedules = () => {
    axios
      .get("http://localhost:8081/schedules/all")
      .then((response) => {
        console.log(response.data);
        setTableItems(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getAllSchedules(), []);

  if(!token){
    return <Navigate to = "/PatientSignIn"/>
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredSchedules = tableItems.filter((schedule) => {
    const dayOfWeek = schedule.dayOfWeek;
    const doctorName = schedule.doctor
      ? schedule.doctor.doctorName.toLowerCase()
      : "";
    const availability = schedule.availability.toLowerCase();
    const query = searchQuery.toLowerCase();

    if (searchField === "dayOfWeek") {
      return dayOfWeek.includes(query);
    } else if (searchField === "doctorName") {
      return doctorName.includes(query);
    } else if (searchField === "availability") {
      return availability.includes(query);
    }

    return false;
  });

  return (
    <>
      <div className="container-md">
        <br />
        <h1 className="text-success">Schedules Info</h1>
        <br />
        <div>
          <label htmlFor="searchField">Search by:</label>
          <select
            id="searchField"
            onChange={handleSearchFieldChange}
            value={searchField}
            style={{ marginLeft: "10px" }}
          >
            <option value="availability">Availability</option>
            <option value="doctorName">Doctor Name</option>
            <option value="dayOfWeek">Day Of The Week</option>
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
                onClick={() => sortTable("sch_id")}
                className={
                  sortBy.field === "sch_id"
                    ? sortBy.ascending
                      ? "ascending"
                      : "descending"
                    : ""
                }
              >
                sch_id 
                {sortBy.field === "sch_id" && (sortBy.ascending ? "⬆" : "⬇")}
              </th>
              <th
                scope="col"
                onClick={() => sortTable("schedule.dayOfWeek")}
                className={
                  sortBy.field === "schedule.dayOfWeek"
                    ? sortBy.ascending
                      ? "ascending"
                      : "descending"
                    : ""
                }
              >
                dayOfWeek 
                {sortBy.field === "schedule.dayOfWeek" &&
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
                doctorName 
                {sortBy.field === "doctor.doctorName" &&
                  (sortBy.ascending ? "⬆" : "⬇")}
              </th>
              <th
                scope="col"
                onClick={() => sortTable("startTime")}
                className={
                  sortBy.field === "startTime"
                    ? sortBy.ascending
                      ? "ascending"
                      : "descending"
                    : ""
                }
              >
                startTime 
                {sortBy.field === "startTime" &&
                  (sortBy.ascending ? "⬆" : "⬇")}
              </th>
              <th
                scope="col"
                onClick={() => sortTable("endTime")}
                className={
                  sortBy.field === "endTime"
                    ? sortBy.ascending
                      ? "ascending"
                      : "descending"
                    : ""
                }
              >
                endTime 
                {sortBy.field === "endTime" &&
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
                Availability 
                {sortBy.field === "status" && (sortBy.ascending ? "⬆" : "⬇")}
              </th>
            </tr>
          </thead>
          <tbody>
          {filteredSchedules.map((schedule) => (
              <tr key={schedule.sch_id}>
                <th scope="row">{schedule.sch_id}</th>
              
                <td>
                  {schedule.dayOfWeek === null
                    ? "N/A"
                    : schedule.dayOfWeek}
                </td>
                <td>
                  {schedule.doctor ? schedule.doctor.doctorName : ""}
                </td>
                 <td>
                  {schedule.startTime === null
                    ? "N/A"
                    : schedule.startTime}
                </td>
                <td>
                  {schedule.endTime === null
                    ? "N/A"
                    : schedule.endTime}
                </td>
                <td>{schedule.availability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewSchedules;
