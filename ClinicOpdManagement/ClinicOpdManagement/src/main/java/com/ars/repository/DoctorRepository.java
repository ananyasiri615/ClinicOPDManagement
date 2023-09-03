package com.ars.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ars.entiy.Doctor;

public interface DoctorRepository extends CrudRepository<Doctor, Integer>{

	List<Doctor> findByName(String patientId);
	List<Doctor> findByType(String department);
	List<Doctor> findById(int doctorld);
	List<Doctor> deleteById(int doctorld);

}

