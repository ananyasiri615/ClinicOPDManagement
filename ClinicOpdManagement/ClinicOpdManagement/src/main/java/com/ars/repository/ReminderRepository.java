package com.ars.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ars.entiy.Reminder;


public interface ReminderRepository extends CrudRepository<Reminder, Integer>{

	List<Reminder> findById(int reminderId);
	List<Reminder> deleteById(int reminderId);
	
}

