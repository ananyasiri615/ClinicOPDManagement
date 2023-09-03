package com.ars.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ars.entiy.Clinic;


public interface ClinicRepository extends CrudRepository<Clinic, Integer>{

	List<Clinic> findByName(String name);
	List<Clinic> findById(int clinicId);
	List<Clinic> deleteById(int clinicId);

}

