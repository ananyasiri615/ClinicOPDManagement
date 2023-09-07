package com.ars.request;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.sql.Time;

public class RescheduleRequest {
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "UTC")
	public Date newDate;
	public Time newTime;
	
	public RescheduleRequest(Date newDate, Time newTime) {
		super();
		this.newDate = newDate;
		this.newTime = newTime;
	}
	public Date getNewDate() {
		return newDate;
	}
	public void setNewDate(Date newDate) {
		this.newDate = newDate;
	}
	public Time getNewTime() {
		return newTime;
	}
	public void setNewTime(Time newTime) {
		this.newTime = newTime;
	}
	public RescheduleRequest() {
		super();
	}
	@Override
	public String toString() {
		return "RescheduleRequest [newDate=" + newDate + ", newTime=" + newTime + "]";
	}
	
	

}
