package com.ars.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ars.entiy.Patient;
import com.ars.entiy.PatientLogin;
import com.ars.service.PatientService;

@RestController
@RequestMapping("/patients")
public class PatientController {

	@Autowired
    private PatientService patientService;

	@GetMapping("/index")
	public String index() {
		return "Success";
	}
	
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping("/all")
	@CrossOrigin(origins = "http://localhost:3000")
    public List<Patient> getAllPatients() {
        return patientService.findAll();
    }

    @GetMapping("/id/{p_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public Patient getPatientById(@PathVariable Integer p_id) {
        return patientService.findById(p_id);
    }

    @PostMapping("/create")
	@CrossOrigin(origins = "http://localhost:3000")
    public Patient createPatient(@RequestBody Patient patient) {
        return patientService.save(patient);
    }

    @PutMapping("/update/{p_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public Patient updatePatient(@PathVariable Integer p_id, @RequestBody Patient patient) {
        patient.setP_id(p_id);
        return patientService.save(patient);
    }

    @DeleteMapping("/delete/{p_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public void delete(@PathVariable Integer p_id) {
		Patient patient = patientService.findById(p_id);
        if (patient != null) {
        	patientService.deleteById(p_id);
        }
    }
    
    @PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:3000")
	public Patient PatientLogin(@RequestBody PatientLogin request) {
    	Patient patient = patientService.getPatientByEmail(request.getEmail());
        if (patient == null) {
            return null;
        }
		else if(!patient.getPassword().equals(request.getPassword())){
			return null;
		}

        return patient;
    }
    
    @GetMapping("/check-email")
	@CrossOrigin(origins = "http://localhost:3000")
    public boolean checkEmailExists(@RequestParam String email) {
        // Check if the email exists in the database
        return patientService.checkEmailExists(email);
    }

}