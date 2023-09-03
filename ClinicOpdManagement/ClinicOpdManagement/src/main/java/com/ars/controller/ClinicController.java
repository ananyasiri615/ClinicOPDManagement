package com.ars.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ars.entiy.Clinic;
import com.ars.repository.ClinicRepository;

@RestController
@RequestMapping("/clinics")
public class ClinicController {

	@Autowired
	ClinicRepository repository;
	@GetMapping("/all")
	public Iterable<Clinic> findAll() {
		return repository.findAll();
	}
	
	@PostMapping("/create")
	//@ResponseStatus(HttpStatus.CREATED)	
	public Clinic create(@RequestBody Clinic clinic) {
	return repository.save(clinic);

	}
	
	@GetMapping("/name/{clinicName}")
	public List<Clinic> findByName(@PathVariable String clinicName){
		return repository.findByName(clinicName);
	}
	
	@GetMapping("/name/{clinicName}")
	public Optional<Clinic> findById(@PathVariable Integer clinicId){
		return repository.findById(clinicId);
	}
	
	@DeleteMapping("delete/{clinicId}")
    public void delete(@PathVariable Integer clinicId) {
		repository.findById(clinicId);
        repository.deleteById(clinicId);
    }

    @PutMapping("update/{clinicId}")
    public Clinic update(@RequestBody Clinic clinic, @PathVariable Integer clinicId) {
    	repository.findById(clinicId);
        return repository.save(clinic);
    }

}