package com.ars.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ars.entiy.Appointment;
import com.ars.repository.AppointmentRepository;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

	@Autowired
	AppointmentRepository repository;
	@GetMapping("/all")
	public Iterable<Appointment> findAll() {
		return repository.findAll();
	}
	
	@PostMapping("/create")
	//@ResponseStatus(HttpStatus.CREATED)	
	public Appointment create(@RequestBody Appointment appointment) {
	return repository.save(appointment);

	}
	
	@DeleteMapping("delete/{appointmentId}")
    public void delete(@PathVariable Integer appointmentId) {
		repository.findById(appointmentId);
        repository.deleteById(appointmentId);
    }

    @PutMapping("update/{appointmentId}")
    public Appointment update(@RequestBody Appointment appointment, @PathVariable Integer appointmentId) {
    	repository.findById(appointmentId);
        return repository.save(appointment);
    }

}