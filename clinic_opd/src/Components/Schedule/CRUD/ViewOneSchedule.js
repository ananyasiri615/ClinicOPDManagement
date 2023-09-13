import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ViewOneSchedule = () => {
  const location = useLocation();
  console.log(location);
  const schedules = location.state.schedules === null ? "" : location.state.schedules;
  const navigate = useNavigate();

  const handleScheduleDelete = (schedules) => {
    axios
      .delete(`http://localhost:8081/schedules/delete/${schedules.sch_id}`)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          // window.location.reload();
          window.alert("Schedule Deleted Successfully.");
          navigate("/ViewAndDeleteSchedules");
        } else {
          console.log("Nothing happened");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div class="container-md">
        <div class="container-md mt-3 px-5 text-center">
          <div class="container shadow border pb-3 bg-body-tertiary">
            <p class="fw-semibold mt-3 h2 text-secondary-emphasis text-center">
              Schedule Details
            </p>
            <hr />
            <div class="row mb-3">
              <div class="col">
                <p class="fw-semibold   text-end">sch_id : </p>
              </div>
              <div class="col">
                <p class="fw-semibold   text-start">{schedules.sch_id} </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <p class="fw-semibold   text-end">Doc_id : </p>
              </div>
              <div class="col">
                <p class="fw-semibold   text-start">
                  {schedules.doctor.doc_id}{" "}
                </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <p class="fw-semibold   text-end">Start Time : </p>
              </div>
              <div class="col">
                <p class="fw-semibold   text-start">
                  {schedules.startTime === null ? "na" : schedules.startTime}{" "}
                </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <p class="fw-semibold   text-end">End TIme: </p>
              </div>
              <div class="col">
                <p class="fw-semibold   text-start">
                  {schedules.endTime === null ? "na" : schedules.endTime}{" "}
                </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <p class="fw-semibold   text-end">Availability: </p>
              </div>
              <div class="col">
                <p class="fw-semibold   text-start">
                  {schedules.availability === null
                    ? "na"
                    : schedules.availability}{" "}
                </p>
              </div>
            </div>
            <button
              class="btn btn-dark fw-semibold btn-lg btn-block text-light"
              type="button"
              onClick={() => {
                navigate("/Doctor/Updateschedule", { state: { schedules } });
              }}
            >
              Edit schedule
            </button>
            <button
              type="button"
              onClick={() => handleScheduleDelete(schedules)}
              class="btn ms-4 btn-dark fw-semibold btn-lg btn-block text-light"
            >
              Delete Schedule
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOneSchedule;
