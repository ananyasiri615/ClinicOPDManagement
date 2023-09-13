package com.ars.controller;

import java.sql.Time;
import java.util.Date;
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

import com.ars.entiy.Appointment;
import com.ars.entiy.Doctor;
import com.ars.entiy.Patient;
import com.ars.request.RescheduleRequest;
import com.ars.service.AppointmentService;
import com.ars.service.DoctorService;
import com.ars.service.PatientService;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private PatientService patientService;

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/index")
    public String index() {
        return "Success";
    }

    @GetMapping("/allAppointments")
	@CrossOrigin(origins = "http://localhost:3000")
    public Iterable<Appointment> getAllAppointments() {
        return appointmentService.getAllApp();
    }

    @PostMapping("/bookAppointment")
	@CrossOrigin(origins = "http://localhost:3000")
    public String bookAppointment(@RequestBody Appointment appointment) {
        Patient patient = patientService.findById(appointment.getPatient().getP_id());
        Doctor doctor = doctorService.findById(appointment.getDoctor().getDoc_id());

        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointmentService.addAppointment(appointment);
        return "Appointment booked successfully";
    }
    
    @DeleteMapping("/cancelAppointment/{app_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public String cancelAppointment(@PathVariable int app_id) {
        appointmentService.cancelAppointment(app_id);
        return "Appointment canceled successfully";
    }

    @PutMapping("/rescheduleAppointment/{app_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public String rescheduleAppointment(
        @PathVariable int app_id,
        @RequestBody RescheduleRequest rescheduleRequest) {

    	Date rescheduledDate = rescheduleRequest.getNewDate();
        Time rescheduledTime = rescheduleRequest.getNewTime();

        appointmentService.rescheduleAppointment(app_id, rescheduledDate, rescheduledTime);

        return "Appointment rescheduled successfully";
    }

    @GetMapping("/getAppointmentByDate/{appointmentDate}")
	@CrossOrigin(origins = "http://localhost:3000")
    public List<Appointment> getAppointmentByDate(@PathVariable Date date){
    	
    	return appointmentService.getAppointmentByDate(date);
    }
//    
//    @GetMapping("/patientId/{p_id}")
//	@CrossOrigin(origins = "http://localhost:3000")
//    public List<Appointment> findByPatient(@PathVariable int p_id){
//    	List<Appointment> appList =  appointmentService.getAppointmentsByPatientId(p_id);
//    	return appList;
//    }
//   
	
}