package com.ars.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ars.entiy.Schedule;


public interface ScheduleRepository extends CrudRepository<Schedule, Integer>{

	List<Schedule> findByName(String patientName);
	List<Schedule> findById(int patientId);
	List<Schedule> deleteById(int patientId);
	
}

