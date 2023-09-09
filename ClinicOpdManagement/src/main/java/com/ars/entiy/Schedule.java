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
    private Time startTime;
    private Time endTime;
    private String availability;
    
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
	public String getAvailability() {
		return availability;
	}
	public void setAvailability(String availability) {
		this.availability = availability;
	}
	public Time getStartTime() {
		return startTime;
	}
	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}
	public Time getEndTime() {
		return endTime;
	}
	public void setEndTime(Time endTime) {
		this.endTime = endTime;
	}
	public Schedule() {
		super();
	}
	public Schedule(int sch_id, Doctor doctor, String dayOfWeek, Time startTime, Time endTime, String availability) {
		super();
		this.sch_id = sch_id;
		this.doctor = doctor;
		this.dayOfWeek = dayOfWeek;
		this.startTime = startTime;
		this.endTime = endTime;
		this.availability = availability;
	}
	@Override
	public String toString() {
		return "Schedule [sch_id=" + sch_id + ", doctor=" + doctor + ", dayOfWeek=" + dayOfWeek + ", startTime="
				+ startTime + ", endTime=" + endTime + ", availability=" + availability + "]";
	}
}   