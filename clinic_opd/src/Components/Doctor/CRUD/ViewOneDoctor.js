import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const ViewOneDoctor = () => {
  const [doctors, setDoctors] = useState({});
  const token = localStorage.getItem("doctortoken")
  // const doctors = location.state.doctors;
  const navigate = useNavigate();

  const getDoctor = () => {
    axios
      .get(`http://localhost:8081/doctors/id/${token}`)
      .then((response) => {
        if(response.data){
          setDoctors(response.data);
        }else{
        console.log("not found");
        }
      })
      .catch((err) => console.log(err))
  }

  useEffect((()=>{getDoctor()}),[]);
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOneDoctor;