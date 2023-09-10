package com.ars.entiy;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "patient")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int p_id; // Unique identifier for the patient
    
    private String patientName;
    private int age;
    private String gender;
	@Column(length = 10, unique = true)
    private String phoneNumber;
    private String address;
	@Column(unique = true)
    private String email;
    private String password;
    private String medicalHistory;
    
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
	private List<Appointment> appointments;
    
//    List<Patient> patients = new ArrayList<>();
//    Patient patient = patients.get(email); // Replace 'index' with the desired index

    
	public int getP_id() {
		return p_id;
	}
	public void setP_id(int p_id) {
		this.p_id = p_id;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMedicalHistory() {
		return medicalHistory;
	}
	public void setMedicalHistory(String medicalHistory) {
		this.medicalHistory = medicalHistory;
	}
	public Patient(int p_id, String patientName, int age, String gender, String phoneNumber, String address,
			String email, String password, String medicalHistory) {
		super();
		this.p_id = p_id;
		this.patientName = patientName;
		this.age = age;
		this.gender = gender;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.email = email;
		this.password = password;
		this.medicalHistory = medicalHistory;
	}
	public Patient() {
		super();
	}
	@Override
	public String toString() {
		return "Patient [p_id=" + p_id + ", patientName=" + patientName + ", age=" + age + ", gender=" + gender
				+ ", phoneNumber=" + phoneNumber + ", address=" + address + ", email=" + email + ", password="
				+ password + ", medicalHistory=" + medicalHistory + "]";
	}
	
}
