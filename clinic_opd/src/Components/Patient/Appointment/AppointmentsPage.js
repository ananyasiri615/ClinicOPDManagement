import React, { useState } from "react";
import axios from "axios";
import "./AppointmentsPage.css";

function AppointmentsPage() {
  const [appointmentData, setAppointmentData] = useState({
    patientId: "",
    doctorId: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });
  };

  const handleAppointmentCreate = () => {
    // Make a POST request using Axios
    axios
      .post("http://localhost:8081/appointments/create", appointmentData)
      .then((response) => {
        // Handle a successful response
        console.log("Appointment created successfully", response.data);

        // You can also redirect to a success page or perform other actions
      })
      .catch((error) => {
        // Handle errors
        console.error("Appointment creation failed", error);
        // You can also show an error message to the user
      });
  };

  return (
    <div className="register">
      <div className="form">
        <h2>Create Appointment</h2>
        <div className="form-body">
          <div className="form__input">
            <label className="form__label" htmlFor="patientId">
              Patient ID:
            </label>
            <input
              type="text"
              id="patientId"
              name="patientId"
              className="form__input"
              value={appointmentData.patientId}
              onChange={handleInputChange}
              required
              placeholder="Patient ID"
            />
          </div>
          <div className="form__input">
            <label className="form__label" htmlFor="doctorId">
              Doctor ID:
            </label>
            <input
              type="text"
              id="doctorId"
              name="doctorId"
              className="form__input"
              value={appointmentData.doctorId}
              onChange={handleInputChange}
              required
              placeholder="Doctor ID"
            />
          </div>
          <div className="form__input">
            <label className="form__label" htmlFor="appointmentDate">
              Appointment Date:
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              className="form__input"
              value={appointmentData.appointmentDate}
              placeholder="dd-mm-yyyy"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form__input">
            <label className="form__label" htmlFor="appointmentTime">
              Appointment Time:
            </label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              className="form__input"
              value={appointmentData.appointmentTime}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="submit">
            <button
              type="button"
              onClick={handleAppointmentCreate}
              className="btn"
            >
              Create Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentsPage;
