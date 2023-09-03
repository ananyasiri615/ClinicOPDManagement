package com.ars.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ars.entiy.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
	
}


