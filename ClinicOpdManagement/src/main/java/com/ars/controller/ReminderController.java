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
import org.springframework.web.bind.annotation.RestController;

import com.ars.entiy.Reminder;
import com.ars.service.ReminderService;

@RestController
@RequestMapping("/Reminders")
public class ReminderController {

	@Autowired
    private ReminderService reminderService;

    @GetMapping("/all")
	@CrossOrigin(origins = "http://localhost:3000")
    public List<Reminder> getAllReminders() {
        return reminderService.findAll();
    }

    @GetMapping("/id/{r_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public Reminder getReminderById(@PathVariable int r_id) {
        return reminderService.findById(r_id);
    }

    @PostMapping("/create")
	@CrossOrigin(origins = "http://localhost:3000")
    public Reminder createReminder(@RequestBody Reminder reminder) {
        return reminderService.createReminder(reminder);
    }

    @PutMapping("/update/{r_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public Reminder updateReminder(@PathVariable int r_id, @RequestBody Reminder reminder) {
        reminder.setR_id(r_id);
        return reminderService.updateReminder(r_id, reminder);
    }

    @DeleteMapping("/delete/{r_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public void delete(@PathVariable int r_id) {
		Reminder reminder = reminderService.findById(r_id);
        if (reminder != null) {
        	reminderService.delete(r_id);
        }
    }


}

