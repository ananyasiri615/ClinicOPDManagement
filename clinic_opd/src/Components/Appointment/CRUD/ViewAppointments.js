// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./ViewDoctors.css"

// const ViewAppointments = () => {
//   const [tableItems, setTableItems] = useState([]);

//   const getAllAppointments = () => {
//     axios
//       .get("http://localhost:8081/appointment/allAppointments")
//       .then((response) => {
//         console.log(response.data);
//         setTableItems(response.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => getAllAppointments(), []);

//   return (
//     <>
//       <div class="container-md">
//         <br />
//         <h1 class="text-success">appointments Info</h1>
//         <br />
//         <table class="table table-striped table-hover">
//           <thead>
//             <tr>
//               <th scope="col">app_id</th>
//               <th scope="col">p_id</th>
//               <th scope="col">doc_id</th>
//               <th scope="col">appointmentDate</th>
//               <th scope="col">appointmentTime</th>
//               <th scope="col">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableItems.map((appointments) => (
//               <tr>
//                 <th scope="row">{appointments.app_id}</th>
//                 <th scope="row">{appointments.patient.patientName}</th>
//                 <th scope="row">{appointments.doctor.doctorName}</th>
//                 <th scope="row">{appointments.appointmentDate===null?"na":appointments.appointmentDate}</th>
//                 <th scope="row">{appointments.appointmentTime===null?"na":appointments.appointmentTime}</th>
//                 <th scope="row">{appointments.status}</th>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default ViewAppointments;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ViewAppointments.css";

const ViewAppointments = () => {
  const [tableItems, setTableItems] = useState([]);
  const [sortBy, setSortBy] = useState({ field: "", ascending: true });

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

  return (
    <>
      <div class="container-md">
        <br />
        <h1 class="text-success">appointments Info</h1>
        <br />
        <table class="table table-striped table-hover">
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
                p_id{" "}
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
                doc_id{" "}
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
            </tr>
          </thead>

          <tbody>
            {tableItems.map((appointments) => (
              <tr>
                <th scope="row">{appointments.app_id}</th>
                <th scope="row">{appointments.patient.patientName}</th>
                <th scope="row">{appointments.doctor.doctorName}</th>
                <th scope="row">
                  {appointments.appointmentDate === null
                    ? "na"
                    : appointments.appointmentDate}
                </th>
                <th scope="row">
                  {appointments.appointmentTime === null
                    ? "na"
                    : appointments.appointmentTime}
                </th>
                <th scope="row">{appointments.status}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewAppointments;
