package com.ars.entiy;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import java.util.Date;
import java.sql.Time;
import java.util.List;

@Entity
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int app_id;

    @ManyToOne
    @JoinColumn(name = "p_id")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "doc_id")
    private Doctor doctor;

    private Date appointmentDate;
    private Time appointmentTime;
    private String status;
	
    @OneToMany(mappedBy = "appointment", cascade = CascadeType.ALL)
	private List<Reminder> reminder;

	@OneToMany(mappedBy = "appointment", cascade = CascadeType.ALL)
	private List<Queue> queue;
    
	public int getApp_id() {
		return app_id;
	}
	public void setApp_id(int app_id) {
		this.app_id = app_id;
	}
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	public Doctor getDoctor() {
		return doctor;
	}
	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	public Date getAppointmentDate() {
		return appointmentDate;
	}
	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}
	public Time getAppointmentTime() {
		return appointmentTime;
	}
	public void setAppointmentTime(Time appointmentTime) {
		this.appointmentTime = appointmentTime;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Appointment(int app_id, Patient patient, Doctor doctor, Date appointmentDate, Time appointmentTime,
			String status) {
		super();
		this.app_id = app_id;
		this.patient = patient;
		this.doctor = doctor;
		this.appointmentDate = appointmentDate;
		this.appointmentTime = appointmentTime;
		this.status = status;
	}
	public Appointment() {
		super();
	}
	@Override
	public String toString() {
		return "Appointment [app_id=" + app_id + ", patient=" + patient + ", doctor=" + doctor + ", appointmentDate="
				+ appointmentDate + ", appointmentTime=" + appointmentTime + ", status=" + status + "]";
	}
}