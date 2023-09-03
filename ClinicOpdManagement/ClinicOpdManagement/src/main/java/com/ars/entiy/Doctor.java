package com.ars.entiy;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "doctor")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long doctorld; // Unique identifier for the doctor
    
    private String doctorName;
    private int age;
    private String gender;
    private String address;
    private Long phoneNumber;
    private String department;

    
    public Doctor() {
    	super();
    }

    public Doctor(String doctorName, int age, String gender, String address, Long phoneNumber, String department) {
    	super();
    	this.doctorName = doctorName;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.department = department;
    }

    public Long getDoctorld() {
        return doctorld;
    }

    public void setDoctorld(Long doctorld) {
        this.doctorld = doctorld;
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
    
    @Override
    public String toString() {
        return "Doctor{" +
                "doctorld=" + doctorld +
                ", name='" + doctorName + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", address='" + address + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", department='" + department + '\'' +
                '}';
    }
}
