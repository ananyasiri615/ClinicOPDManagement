import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to Clinic OPD Management System</h1>
      </header>
      <main>
        <section className="hero">
          <h2>Your Health, Our Priority</h2>
          <p>Book appointments, manage your health records, and experience top-notch healthcare services.</p>
          <a href="/PatientSignIn" className="btn">Get Started</a>
        </section>
        <section className="features">
          <div className="feature">
            <h3>Easy Appointments</h3>
            <p>Book appointments with your preferred doctors hassle-free.</p>
          </div>
          <div className="feature">
            <h3>Experienced Doctors</h3>
            <p>Our team of experienced doctors is dedicated to your well-being.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Clinic OPD Management System</p>
      </footer>
    </div>
  );
};

export default HomePage;

