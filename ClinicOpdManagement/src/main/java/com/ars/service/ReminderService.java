package com.ars.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import com.ars.entiy.Appointment;
import com.ars.entiy.Patient;
import com.ars.entiy.Reminder;
import com.ars.repository.ReminderRepository;

@Service
public class ReminderService {
	
	@Autowired
    private ReminderRepository reminderRepository;
	
	@Autowired
	RestTemplate restTemplate;
	
	@Autowired
	EmailService emailService;
	
	Patient patient;
	
	Reminder reminder;

    public Iterable<Reminder> getAllReminders() {
        return reminderRepository.findAll();
    }
    
    public Reminder findById(int r_id) {
        return reminderRepository.findById(r_id).orElse(null);
    }
    
    public Reminder createReminder(Reminder reminder) {
        // Make sure the reminder has a valid associated appointment
        if (reminder.getAppointment() == null || reminder.getAppointment().getApp_id() == 0) {
            throw new IllegalArgumentException("Reminder must be associated with a valid appointment");
        }

        return reminderRepository.save(reminder);
    }
    
    public Reminder updateReminder(@PathVariable int r_id, @RequestBody Reminder reminder) {
    	reminder.setR_id(r_id);
        return reminderRepository.save(reminder);
    }
    
    public void delete(@PathVariable int r_id) {
		Optional<Reminder> reminder = reminderRepository.findById(r_id);
        if (reminder != null) {
        	reminderRepository.deleteById(r_id);
        }
    }

    public List<Reminder> findAll() {
        return reminderRepository.findAll();
    }
    
    public String sendMailToAllAppointment(Date date) {
        List<Appointment> appointments = restTemplate.getForObject("http://localhost:2003/api/appointments/getAppointmentByDate/" + date, List.class);
        int size = appointments.size();
        String response = "";

        for (int i = 0; i < size; i++) {
            String actualStatus = appointments.get(i).getStatus();
            String confirmedStatus = "Confirmed";
            String pendingStatus = "Pending";
            String canceledStatus = "Canceled";
            String rescheduledStatus = "Rescheduled";

            String email = reminder.getAppointment().getPatient().getEmail();
            String appointmentDate = appointments.get(i).getAppointmentDate().toString();

            if (actualStatus.equalsIgnoreCase(confirmedStatus)) {
                String subject = "Appointment Confirmation";
                String message = "You have a confirmed appointment on: " + appointmentDate;
                emailService.sendNotificationEmail(email, subject, message);
                // Optionally, you can store the response from sending the email in your response variable
                response = "Email sent to " + email;
            } else if (actualStatus.equalsIgnoreCase(pendingStatus)) {
                // Handle Pending status
            } else if (actualStatus.equalsIgnoreCase(canceledStatus)) {
                // Handle Canceled status
            } else if (actualStatus.equalsIgnoreCase(rescheduledStatus)) {
                // Handle Rescheduled status
            }
        }

        return response;
    }
}