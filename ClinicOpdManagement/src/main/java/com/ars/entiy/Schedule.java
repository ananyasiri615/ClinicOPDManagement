package com.ars.entiy;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.sql.Time;

@Entity
@Table(name = "schedules")
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sch_id;

    @ManyToOne
    @JoinColumn(name = "doc_id")
    private Doctor doctor;

    private String dayOfWeek;
    private Time timeslot;
    private Boolean availability;
    
	public int getSch_id() {
		return sch_id;
	}
	public void setSch_id(int sch_id) {
		this.sch_id = sch_id;
	}
	public Doctor getDoctor() {
		return doctor;
	}
	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	public String getDayOfWeek() {
		return dayOfWeek;
	}
	public void setDayOfWeek(String dayOfWeek) {
		this.dayOfWeek = dayOfWeek;
	}
	public Time getTimeslot() {
		return timeslot;
	}
	public void setTimeslot(Time timeslot) {
		this.timeslot = timeslot;
	}
	public Boolean getAvailability() {
		return availability;
	}
	public void setAvailability(Boolean availability) {
		this.availability = availability;
	}
	
	public Schedule(int sch_id, Doctor doctor, String dayOfWeek, Time timeslot, Boolean availability) {
		super();
		this.sch_id = sch_id;
		this.doctor = doctor;
		this.dayOfWeek = dayOfWeek;
		this.timeslot = timeslot;
		this.availability = availability;
	}
	public Schedule() {
		super();
	}
	
	@Override
	public String toString() {
		return "Schedule [sch_id=" + sch_id + ", doctor=" + doctor + ", dayOfWeek=" + dayOfWeek + ", timeslot="
				+ timeslot + ", availability=" + availability + "]";
	}
}   