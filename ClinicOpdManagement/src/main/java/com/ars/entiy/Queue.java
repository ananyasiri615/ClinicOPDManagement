package com.ars.entiy;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "queues")
public class Queue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int q_id;

    @ManyToOne
    @JoinColumn(name = "app_id")
    private Appointment appointment;

    private int q_number;
    private String q_status;
	
    
	public int getQ_id() {
		return q_id;
	}
	public void setQ_id(int q_id) {
		this.q_id = q_id;
	}
	public Appointment getAppointment() {
		return appointment;
	}
	public void setAppointment(Appointment appointment) {
		this.appointment = appointment;
	}
	public int getQ_number() {
		return q_number;
	}
	public void setQ_number(int q_number) {
		this.q_number = q_number;
	}
	public String getQ_status() {
		return q_status;
	}
	public void setQ_status(String q_status) {
		this.q_status = q_status;
	}
	
	public Queue(int q_id, Appointment appointment, int q_number, String q_status) {
		super();
		this.q_id = q_id;
		this.appointment = appointment;
		this.q_number = q_number;
		this.q_status = q_status;
	}
	public Queue() {
		super();
	}
	@Override
	public String toString() {
		return "Queue [q_id=" + q_id + ", appointment=" + appointment + ", q_number=" + q_number + ", q_status="
				+ q_status + "]";
	}
	
	
}