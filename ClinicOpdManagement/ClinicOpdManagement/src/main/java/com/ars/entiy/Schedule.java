package com.ars.entiy;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import java.time.DayOfWeek;
import java.time.LocalTime;

@Entity
@Table(name = "schedule")
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scheduleId; // Unique identifier for the schedule

    private Long doctorId;
    private DayOfWeek dayOfWeek;
    private LocalTime timeslot;
    private boolean availability;

    // Constructors, getters, setters, and other methods
    
    public Schedule() {
    }

    public Schedule(Long doctorId, DayOfWeek dayOfWeek, LocalTime timeslot, boolean availability) {
        this.doctorId = doctorId;
        this.dayOfWeek = dayOfWeek;
        this.timeslot = timeslot;
        this.availability = availability;
    }

    public Long getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(Long scheduleId) {
        this.scheduleId = scheduleId;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public DayOfWeek getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(DayOfWeek dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public LocalTime getTimeslot() {
        return timeslot;
    }

    public void setTimeslot(LocalTime timeslot) {
        this.timeslot = timeslot;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    // Other methods, if needed
    
    @Override
    public String toString() {
        return "Schedule{" +
                "scheduleId=" + scheduleId +
                ", doctorId=" + doctorId +
                ", dayOfWeek=" + dayOfWeek +
                ", timeslot=" + timeslot +
                ", availability=" + availability +
                '}';
    }
}
