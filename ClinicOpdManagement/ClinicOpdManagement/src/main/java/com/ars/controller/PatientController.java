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

import com.ars.entiy.Patient;
import com.ars.repository.PatientRepository;

@RestController
@RequestMapping("/patients")
public class PatientController {

	@Autowired
	PatientRepository repository;
	@GetMapping("/all")
	public Iterable<Patient> findAll() {
		return repository.findAll();
	}
	
	@PostMapping("/create")
	//@ResponseStatus(HttpStatus.CREATED)	
	public Patient create(@RequestBody Patient patient) {
	return repository.save(patient);

	}
	
	@GetMapping("/name/{doctorName}")
	public List<Patient> findByName(@PathVariable String patientName){
		return repository.findByName(patientName);
	}
	
	@DeleteMapping("delete/{patientId}")
    public void delete(@PathVariable Integer patientId) {
		repository.findById(patientId);
        repository.deleteById(patientId);
    }

    @PutMapping("update/{patientId}")
    public Patient update(@RequestBody Patient patient, @PathVariable Integer patientId) {
    	repository.findById(patientId);
        return repository.save(patient);
    }

}