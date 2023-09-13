import React from "react";
import "./AboutUsPage.css"; // Import your CSS for this page

function AboutUsPage() {
  return (
    <div className="about-us">
      <div className="container1">
        <h2>About Us</h2>
        <p>
          Welcome to the Clinic OPD Management System, where we are dedicated to
          providing high-quality healthcare services to our patients.
        </p>
        <p>
          Our mission is to streamline the patient booking process, reduce wait
          times, and enhance the overall patient experience.
        </p>
        <p>
          We have a team of experienced doctors and staff who are committed to
          delivering the best possible care to our patients.
        </p>
        <div class="container">
          <div class="row">
            <div class="col">
              <h3>Our Services</h3>
              <ul>
                <li>Patient Registration</li>
                <li>Appointment Booking</li>
                <li>Appointment Management</li>
                <li>Doctor Registration</li>
                <li>Doctor Scheduling</li>
                <li>Cancellation and Rescheduling</li>
              </ul>
            </div>
            <div class="col">
              <img
                src="./Images/medikeep6.gif" // Replace with the actual path to your GIF
                alt="Clinic OPD"
                className="gif-image"
              />
            </div>
          </div>
        </div>
        <h3>Our Commitment</h3>
        <p>
          We are dedicated to providing a secure, user-friendly, and efficient
          system that meets the needs of both patients and healthcare
          professionals.
        </p>
        <p>
          Thank you for choosing us as your healthcare provider. We look forward
          to serving you and improving your healthcare experience.
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
