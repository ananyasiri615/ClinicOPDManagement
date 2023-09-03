package com.ars.request;

import java.sql.Time;
import java.util.Date;

public class RescheduleRequest {
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
