package com.ars.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ars.entiy.Schedule;
import com.ars.repository.ScheduleRepository;

@RestController
@RequestMapping("/schedules")
public class ScheduleController {

	@Autowired
	ScheduleRepository repository;
	@GetMapping("/all")
	public Iterable<Schedule> findAll() {
		return repository.findAll();
	}
	
	@PostMapping("/create")
	//@ResponseStatus(HttpStatus.CREATED)	
	public Schedule create(@RequestBody Schedule schedule) {
	return repository.save(schedule);

	}
	
	@DeleteMapping("delete/{scheduleId}")
    public void delete(@PathVariable Integer scheduleId) {
		repository.findById(scheduleId);
        repository.deleteById(scheduleId);
    }

}