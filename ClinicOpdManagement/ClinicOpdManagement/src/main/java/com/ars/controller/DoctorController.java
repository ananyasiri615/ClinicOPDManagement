package com.ars.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ars.entiy.Doctor;
import com.ars.repository.DoctorRepository;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

	@Autowired
	DoctorRepository repository;
	@GetMapping("/all")
	public Iterable<Doctor> findAll() {
		return repository.findAll();
	}
	
	@PostMapping("/create")
	//@ResponseStatus(HttpStatus.CREATED)	
	public Doctor create(@RequestBody Doctor doctor) {
	return repository.save(doctor);

	}
	
	@GetMapping("/name/{doctorName}")
	public List<Doctor> findByName(@PathVariable String doctorName){
		return repository.findByName(doctorName);
	}
	
	@GetMapping("/name/{department}")
	public List<Doctor> findByType(@PathVariable String department){
		return repository.findByType(department);
	}
	
	
	@DeleteMapping("delete/{doctorld}")
    public void delete(@PathVariable Integer doctorld) {
		repository.findById(doctorld);
        repository.deleteById(doctorld);
    }

    @PutMapping("update/{doctorld}")
    public Doctor update(@RequestBody Doctor doctor, @PathVariable Integer doctorld) {
    	repository.findById(doctorld);
        return repository.save(doctor);
    }

}