package com.ars.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ars.entiy.Appointment;

public interface AppointmentRepository extends CrudRepository<Appointment, Integer>{

	List<Appointment> findById(int appointmentId);
	List<Appointment> deleteById(int appointmentId);

}

