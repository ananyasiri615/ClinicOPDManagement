import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateAppointments = () => {
  const navigate = useNavigate(); // Initialize history
  const location = useLocation();
  const appointments = location.state.appointments;

  // Initialize the state for the selected option
  const [p_id, setP_id] = useState(
    appointments ? appointments.patient.p_id : ""
  );
  const [doc_id, setDoc_id] = useState(
    appointments ? appointments.doctor.doc_id : ""
  );
  const [appointmentDate, setAppointmentDate] = useState(
    appointments ? appointments.appointmentDate : ""
  );
  const [appointmentTime, setAppointmentTime] = useState(
    appointments ? appointments.appointmentTime : ""
  );

  function convertTimeToExtendedFormat(time) {
    // Split the time string into hours and minutes
    const [hours, minutes] = time.split(":");
    // Create a new time string with ':00' appended to it
    const extendedTime = `${hours}:${minutes}:00`;
    return extendedTime;
  }
  // Use useEffect to set the state when appointments changes
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);

    // Create an object with the updated data
    const updatedappointmentsData = {
      app_id: appointments.app_id,
      patient: { p_id },
      doctor: { doc_id },
      newDate: appointmentDate,
      newTime: convertTimeToExtendedFormat(appointmentTime),
      status: "Scheduled"
    };
    console.log(updatedappointmentsData.newTime + ":00");
    axios
      .put(
        `http://localhost:8081/appointment/rescheduleAppointment/${appointments.app_id}`,
        updatedappointmentsData
      )
      .then((response) => {
        console.log("Success!! Data stored!", updatedappointmentsData);
        alert("success");
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
                  p_id
                </label>
                <input
                  type="number"
                  name="p_id"
                  id="form2Example17"
                  class="form-control"
                  //readOnly={readOnly}
                  value={p_id}
                  onChange={(e) => setP_id(e.target.value)}
                  disabled
                />
              </div>

              <div class="col-md-6 mb-4">
                <label
                  class="form-label text-info fw-semibold fs-5"
                  for="form2Example27"
                >
                  doc_id
                </label>
                <input
                  type="number"
                  name="doc_id"
                  id="form2Example27"
                  class="form-control"
                  //readOnly={readOnly}
                  value={doc_id}
                  onChange={(e) => setDoc_id(e.target.value)}
                  disabled
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-4">
                <label
                  class="form-label fw-semibold text-info fs-5"
                  for="form2Example27"
                >
                  appointmentDate
                </label>
                <input
                  type="date"
                  name="appointmentDate"
                  id="form2Example27"
                  class="form-control"
                  //readOnly={readOnly}
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
              <div class="col-md-6 mb-4">
                <label
                  class="form-label fw-semibold text-info fs-5"
                  for="form2Example27"
                >
                  AppointmentTime
                </label>
                <input
                  type="time"
                  name="appointmentTime"
                  id="form2Example27"
                  class="form-control"
                  //readOnly={readOnly}
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
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

export default UpdateAppointments;
