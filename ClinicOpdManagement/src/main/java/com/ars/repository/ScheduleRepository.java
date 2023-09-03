package com.ars.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ars.entiy.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, Integer>{
	
}

