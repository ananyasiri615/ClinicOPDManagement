package com.ars.entiy;

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
@Table(name = "doctor")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int doc_id; // Unique identifier for the doctor
    private String doctorName;
    private int age;
    private String gender;
    private String address;
    private String email;
    private String password;
	@Column(length = 10, unique = true)
    private Long phoneNumber;
    private String department;
	
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
	private List<Appointment> appointments;

	@OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
	private List<Schedule> schedule;
    
	public int getDoc_id() {
		return doc_id;
	}
	public void setDoc_id(int doc_id) {
		this.doc_id = doc_id;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
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
	public Long getPhoneNumber() {
		return phoneNumber;
	}
		public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	
	public Doctor(int doc_id, String doctorName, int age, String gender, String address, String email, String password,
			Long phoneNumber, String department) {
		super();
		this.doc_id = doc_id;
		this.doctorName = doctorName;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.email = email;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.department = department;
	}
	public Doctor() {
		super();
	}
	@Override
	public String toString() {
		return "Doctor [doc_id=" + doc_id + ", doctorName=" + doctorName + ", age=" + age + ", gender=" + gender
				+ ", address=" + address + ", email=" + email + ", password=" + password + ", phoneNumber="
				+ phoneNumber + ", department=" + department + "]";
	}
	
}
