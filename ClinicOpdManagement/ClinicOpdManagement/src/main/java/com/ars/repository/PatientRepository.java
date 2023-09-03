package com.ars.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ars.entiy.Patient;


public interface PatientRepository extends CrudRepository<Patient, Integer>{

	List<Patient> findByName(String patientName);
	List<Patient> findById(int patientId);
	List<Patient> deleteById(int patientId);
	
}

