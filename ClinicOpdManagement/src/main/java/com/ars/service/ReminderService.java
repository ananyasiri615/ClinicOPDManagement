package com.ars.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.ars.entiy.Reminder;
import com.ars.repository.ReminderRepository;

@Service
public class ReminderService {
	
	@Autowired
    private ReminderRepository reminderRepository;

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
}