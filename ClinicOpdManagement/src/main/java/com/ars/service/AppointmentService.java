package com.ars.service;

import java.sql.Time;
import java.util.Date;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ars.entiy.Appointment;
import com.ars.entiy.Doctor;
import com.ars.entiy.Patient;
import com.ars.entiy.Queue;
import com.ars.entiy.Reminder;
import com.ars.exceptions.AppointmentNotFoundException;
import com.ars.repository.AppointmentRepository;
import com.ars.repository.QueueRepository;
import com.ars.repository.ReminderRepository;

@Service
public class AppointmentService {
	@Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private ReminderRepository reminderRepository;

    @Autowired
    private QueueRepository queueRepository;

    @Autowired
    private PatientService patientService;

    @Autowired
    private DoctorService doctorService;

    public Iterable<Appointment> getAllApp() {
        return appointmentRepository.findAll();
    }
    
    public void addAppointment(Appointment appointment) {
    	Patient patient = patientService.findById(appointment.getPatient().getP_id());
    	Doctor doctor = doctorService.findById(appointment.getDoctor().getDoc_id());
   	    appointment.setPatient(patient);
   	    appointment.setDoctor(doctor);
   	    appointment.setAppointmentDate(appointment.getAppointmentDate());
   	    appointment.setAppointmentTime(appointment.getAppointmentTime());
   	    Appointment savedAppointment = appointmentRepository.save(appointment);
   	    Reminder reminder = new Reminder();
   	    reminder.setReminderDate(appointment.getAppointmentDate());
    	reminder.setR_type("SMS");
        reminder.setAppointment(savedAppointment); // Associate the saved appointment
        reminderRepository.save(reminder);
   	    calculateAndSaveQueueNumber(appointment);
   	}
    
    private void calculateAndSaveQueueNumber(Appointment appointment) {
        Date appointmentDate = appointment.getAppointmentDate();

        int queueNumber = appointmentRepository.countAppBydate(appointmentDate);

        Queue queue = new Queue();
        queue.setAppointment(appointment);
        queue.setQ_number(queueNumber);
        queue.setQ_status("Waiting");

        queueRepository.save(queue);
    }
    
    public void cancelAppointment(int app_id) {
        Optional<Appointment> optionalAppointment = appointmentRepository.findById(app_id);
        if (optionalAppointment.isPresent()) {
            Appointment appointment = optionalAppointment.get();
            appointment.setStatus("Cancelled"); // Update appointment status
            appointmentRepository.save(appointment);
        } else {
            throw new AppointmentNotFoundException("Appointment with ID " + app_id + " not found"); // Handle appointment not found
        }
    }
    
    public void rescheduleAppointment(int app_id, Date newDate, Time newTime) {
        Optional<Appointment> optionalAppointment = appointmentRepository.findById(app_id);
        if (optionalAppointment.isPresent()) {
            Appointment appointment = optionalAppointment.get();
            appointment.setAppointmentDate(newDate);
            appointment.setAppointmentTime(newTime);
            appointmentRepository.save(appointment);
        } else {
            throw new AppointmentNotFoundException("Appointment with ID " + app_id + " not found"); // Handle appointment not found
        }
    }
    
    public Appointment findByAppointment(int app_id) {
        Optional<Appointment> optionalAppointment = appointmentRepository.findById(app_id);
        if (optionalAppointment.isPresent()) {
            return optionalAppointment.get();
        } else {
            throw new AppointmentNotFoundException("Appointment with ID " + app_id + " not found");
        }
    }
}
