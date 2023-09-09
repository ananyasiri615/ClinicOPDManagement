import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateSchedule = () => {
  const navigate = useNavigate(); // Initialize history
  const location = useLocation();
  const schedules = location.state.schedules;

  // Initialize the state for the selected option
  const [sch_id, setSch_id] = useState(schedules ? schedules.sch_id : "");
  const [doc_id, setDoc_id] = useState(schedules ? schedules.doctor.doc_id : "");
  const [startTime, setStartTime] = useState(
    schedules ? schedules.startTime : ""
  );
  const [endTime, setEndTime] = useState(schedules ? schedules.endTime : "");
  const [availability, setAvailability] = useState(
    schedules ? schedules.availability : "Available"
  );

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

  // Use useEffect to set the state when schedule changes
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);

    // Create an object with the updated data
    const updatedScheduleData = {
      sch_id: schedules.sch_id,
      doctor: { doc_id },
      startTime: convertTimeToExtendedFormat(startTime),
      endTime: convertTimeToExtendedFormat(endTime),
      availability,
    };
    console.log(updatedScheduleData.newTime + ":00");
    axios
      .put(
        `http://localhost:8081/schedules/update/${schedules.sch_id}`,
        updatedScheduleData
      )
      .then((response) => {
        console.log("Success!! Data stored!", updatedScheduleData);
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
          Edit Schedule
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
                  sch_id
                </label>
                <input
                  type="number"
                  name="sch_id"
                  id="form2Example17"
                  class="form-control"
                  //readOnly={readOnly}
                  value={sch_id}
                  onChange={(e) => setSch_id(e.target.value)}
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
                  startTime
                </label>
                <input
                  type="time"
                  name="startTime"
                  id="form2Example27"
                  class="form-control"
                  //readOnly={readOnly}
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div class="col-md-6 mb-4">
                <label
                  class="form-label fw-semibold text-info fs-5"
                  for="form2Example27"
                >
                  endTime
                </label>
                <input
                  type="time"
                  name="endTime"
                  id="form2Example27"
                  class="form-control"
                  //readOnly={readOnly}
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-6 mb-4">
                <label
                  class="form-label fw-semibold text-info fs-5"
                  for="form2Example27"
                >
                  Availability
                </label>
                <select
                  name="availability"
                  id="form2Example27"
                  class="form-control"
                  value={availability}
                  onChange={handleAvailabilityChange}
                >
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
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

export default UpdateSchedule;
