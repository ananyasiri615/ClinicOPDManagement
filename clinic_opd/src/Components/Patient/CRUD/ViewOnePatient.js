import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ViewOnePatient = () => {
  const location = useLocation();
  const patients = location.state.patients;
  const navigate = useNavigate();

  const handlePatientDelete = (patients) =>{
    axios.delete(`http://localhost:8081/patients/delete/${patients.p_id}`)
    .then(response => {
      console.log(response.data);
      if(response.data){
        window.location.reload();
        window.alert("Patient record Deleted Successfully.")
        navigate("/ViewAndDeletePatients");
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
           Patint Details
        </p>
          <hr />
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">p_id : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{patients.p_id}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Name : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{patients.patientName}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Age : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{patients.age}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Gender : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{patients.gender}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Contact Info : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{patients.phoneNumber}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Address : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{patients.address}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold text-end">Date Of Birth : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{patients.dateOfBirth}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold text-end">Medical History : </p>
              </div>
              <div class="col">
              <p class="fw-semibold text-start">{patients.medicalHistory}  </p>
              </div>
            </div>
            <button
                class="btn btn-dark fw-semibold btn-lg btn-block text-light"
                type="button"
                onClick={()=>{navigate("/UpdatePatient", { state: { patients } });}}
              >
                Edit Patient
              </button>
              <button
                    type="button"
                    onClick={() => handlePatientDelete(patients)}
                    class="btn ms-4 btn-dark fw-semibold btn-lg btn-block text-light"
                  >
                    Delete Patient
                  </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOnePatient;