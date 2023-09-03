package com.ars.entiy;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name = "reminder")
public class Reminder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reminderId; // Unique identifier for the reminder
    
    private int appointmentId;
    private Date reminderDate;
    private Time reminderTime;

    // Constructors, getters, setters, and other methods
    
    public Reminder() {
    }

    public Reminder(int appointmentId, Date reminderDate, Time reminderTime) {
        this.appointmentId = appointmentId;
        this.reminderDate = reminderDate;
        this.reminderTime = reminderTime;
    }

    public int getReminderId() {
        return reminderId;
    }

    public void setReminderId(int reminderId) {
        this.reminderId = reminderId;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
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

    // Other methods, if needed
    
    @Override
    public String toString() {
        return "Reminder{" +
                "reminderId=" + reminderId +
                ", appointmentId=" + appointmentId +
                ", reminderDate=" + reminderDate +
                ", reminderTime=" + reminderTime +
                '}';
    }
}
