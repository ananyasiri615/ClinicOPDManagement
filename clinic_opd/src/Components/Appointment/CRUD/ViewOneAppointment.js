import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ViewOneAppointment = () => {
  const location = useLocation();
  console.log(location);
  const appointments = location.state.appointments===null?"":location.state.appointments;
  const navigate = useNavigate();

  const handleAppointmentDelete = (appointments) =>{
    axios.delete(`http://localhost:8081/appointment/cancelAppointment/${appointments.app_id}`)
    .then(response => {
      console.log(response.data);
      if(response.data){
        // window.location.reload();
        window.alert("Appointment record Deleted Successfully.")
        navigate("/ViewAndDeleteAppointments");
      }
      else{
        console.log("Nothing happened");
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <>
      <div class="container-md">
        
        <div class="container-md mt-3 px-5 text-center">
          <div class="container shadow border pb-3 bg-body-tertiary">
          
        <p class="fw-semibold mt-3 h2 text-secondary-emphasis text-center">
           Appointment Details
        </p>
          <hr />
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">App_id : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{appointments.app_id}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">P_id : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{appointments.patient.p_id}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Doc_id : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{appointments.doctor.doc_id}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Appointment Date : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{appointments.appointmentDate===null?"na":appointments.appointmentDate}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Appointment Time: </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{appointments.appointmentTime===null?"na":appointments.appointmentTime}  </p>
              </div>
            </div>
            <button
                class="btn btn-dark fw-semibold btn-lg btn-block text-light"
                type="button"
                onClick={()=>{navigate("/UpdateAppointments", { state: { appointments } });}}
              >
                Edit Appointment
              </button>
              <button
                    type="button"
                    onClick={() => handleAppointmentDelete(appointments)}
                    class="btn ms-4 btn-dark fw-semibold btn-lg btn-block text-light"
                  >
                    Delete Appointment
                  </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOneAppointment;