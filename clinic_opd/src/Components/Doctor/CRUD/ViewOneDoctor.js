import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ViewOneDoctor = () => {
  const location = useLocation();
  console.log(location);
  const doctors = location.state.doctors;
  const navigate = useNavigate();

  const handleDoctorDelete = (doctors) =>{
    axios.delete(`http://localhost:8081/doctors/delete/${doctors.doc_id}`)
    .then(response => {
      console.log(response.data);
      if(response.data){
        window.location.reload();
        window.alert("Doctor record Deleted Successfully.")
        navigate("/ViewAndDeleteDoctors");
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
           Doctor Details
        </p>
          <hr />
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Doc_id : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{doctors.doc_id}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Name : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{doctors.doctorName}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Age : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{doctors.age}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Gender : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{doctors.gender}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Contact Info : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{doctors.phoneNumber}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Address : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{doctors.address}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold   text-end">Department : </p>
              </div>
              <div class="col">
              <p class="fw-semibold   text-start">{doctors.department}  </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
              <p class="fw-semibold text-end">Email : </p>
              </div>
              <div class="col">
              <p class="fw-semibold text-start">{doctors.email}  </p>
              </div>
            </div>
            <button
                class="btn btn-dark fw-semibold btn-lg btn-block text-light"
                type="button"
                onClick={()=>{navigate("/Doctor/UpdateDoctor", { state: { doctors } });}}
              >
                Edit Doctor
              </button>
              <button
                    type="button"
                    onClick={() => handleDoctorDelete(doctors)}
                    class="btn ms-4 btn-dark fw-semibold btn-lg btn-block text-light"
                  >
                    Delete Doctor
                  </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOneDoctor;