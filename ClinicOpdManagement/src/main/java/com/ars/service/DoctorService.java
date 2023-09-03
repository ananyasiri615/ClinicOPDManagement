package com.ars.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ars.entiy.Doctor;
import com.ars.repository.DoctorRepository;

@Service
public class DoctorService {

	@Autowired
    private DoctorRepository doctorRepository;

    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    public Doctor findById(Integer doc_id) {
        return doctorRepository.findById(doc_id).orElse(null);
    }

    public Doctor save(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public void deleteById(Integer doc_id) {
        doctorRepository.deleteById(doc_id);
    }

	public List<Doctor> findAll() {
		return doctorRepository.findAll();
	}
	
	

}
