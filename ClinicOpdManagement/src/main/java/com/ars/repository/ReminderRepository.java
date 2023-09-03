package com.ars.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ars.entiy.Reminder;

public interface ReminderRepository extends JpaRepository<Reminder, Integer>{
	
}

