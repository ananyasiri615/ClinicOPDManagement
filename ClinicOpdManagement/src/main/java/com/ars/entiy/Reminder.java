package com.ars.entiy;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.util.Date;
import java.sql.Time;

@Entity
@Table(name = "reminders")
public class Reminder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int r_id;

    @ManyToOne
    @JoinColumn(name = "app_id")
    private Appointment appointment;
    
	private String r_type;
    private Date reminderDate;
    private Time reminderTime;
    
	public int getR_id() {
		return r_id;
	}
	public void setR_id(int r_id) {
		this.r_id = r_id;
	}
	public Appointment getAppointment() {
		return appointment;
	}
	public void setAppointment(Appointment appointment) {
		this.appointment = appointment;
	}
	public Date getReminderDate() {
		return reminderDate;
	}
	public void setReminderDate(Date reminderDate) {
		this.reminderDate = reminderDate;
	}
	public Time getReminderTime() {
		return reminderTime;
	}
	public void setReminderTime(Time reminderTime) {
		this.reminderTime = reminderTime;
	}
	public String getR_type() {
		return r_type;
	}
	public void setR_type(String r_type) {
		this.r_type = r_type;
	}
	
	public Reminder() {
		super();
	}
	public Reminder(int r_id, Appointment appointment, String r_type, Date reminderDate, Time reminderTime) {
		super();
		this.r_id = r_id;
		this.appointment = appointment;
		this.r_type = r_type;
		this.reminderDate = reminderDate;
		this.reminderTime = reminderTime;
	}
	@Override
	public String toString() {
		return "Reminder [r_id=" + r_id + ", appointment=" + appointment + ", r_type=" + r_type + ", reminderDate="
				+ reminderDate + ", reminderTime=" + reminderTime + "]";
	}
	
}
