import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateSchedule.css";
import { Navigate, useNavigate } from "react-router-dom";

function CreateSchedule() {
  const token = localStorage.getItem("doctortoken")
  const [doc_id, setDoc_id] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [availability, setAvailability] = useState("Available"); // Default to Available
  const navigate = useNavigate(); // Initialize history

  useEffect(() => {
    if (token) {
      setDoc_id(token);
    }
  }, [token]);

  function convertTimeToExtendedFormat(time) {
    // Split the time string into hours and minutes
    const [hours, minutes] = time.split(":");
    // Create a new time string with ':00' appended to it
    const extendedTime = `${hours}:${minutes}:00`;
    return extendedTime;
  }
  // Function to handle changes in the Availability dropdown
  const handleAvailabilityChange = (e) => {
    const selectedAvailability = e.target.value;
    setAvailability(selectedAvailability);
    
    // If "Not Available" is selected, clear the start and end times
    if (selectedAvailability === "Not Available") {
      setStartTime("");
      setEndTime("");
    }
  };

  const handleRegistrationSubmit = () => {
    const newSchedule = {
      doctor: { doc_id },
      dayOfWeek,
      startTime: convertTimeToExtendedFormat(startTime),
      endTime: convertTimeToExtendedFormat(endTime),
      availability,
    };

    // Make a POST request using Axios
    axios
      .post("http://localhost:8081/schedules/create", newSchedule)
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
    return <Navigate to = "/DoctorSignIn"/>
  }
  return (
    <div className="register">
      <div className="form" onSubmit={handleRegistrationSubmit}>
        <h2>Create Schedule</h2>
        <div className="form-body">
          <div className="form__input doc_id">
            <label className="form__label" htmlFor="doc_id">
              Doctor ID:
            </label>
            <input
              type="number"
              id="doc_id"
              name="doc_id"
              className="form__input"
              value={doc_id}
              onChange={(e) => setDoc_id(e.target.value)}
              // required
              // placeholder="Doctor ID"
              disabled
            />
          </div>
          <div className="form__input dayOfWeek">
          <label className="form__label" htmlFor="dayOfWeek">
              Day of Week:
            </label>
            <select
              id="dayOfWeek"
              name="dayOfWeek"
              className="form__input"
              value={dayOfWeek}
              onChange={(e) => setDayOfWeek(e.target.value)}
              required
            >
              <option value="">Select Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
              </select>
          </div>
          <div className="form__input startTime">
            <label className="form__label" htmlFor="startTime">
              Start Time:
            </label>
            <input
              type="time"
              id="startTime"
              className="form__input"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
              disabled={availability === "Not Available"} 
            />
          </div>
          <div className="form__input endTime">
            <label className="form__label" htmlFor="endTime">
              End Time:
            </label>
            <input
              type="time"
              id="endTime"
              className="form__input"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
              disabled={availability === "Not Available"} // Disable if Not Available
            />
          </div>
          <div className="form__input availability">
            <label className="form__label" htmlFor="availability">
              Availability:
            </label>
            <select
              id="availability"
              name="availability"
              className="form__input"
              value={availability}
              onChange={handleAvailabilityChange}
              required
            >
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>
        </div>
        <div className="submit">
          <button
            onClick={() => handleRegistrationSubmit()}
            type="submit"
            className="btn"
          >
            Create Schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateSchedule;
