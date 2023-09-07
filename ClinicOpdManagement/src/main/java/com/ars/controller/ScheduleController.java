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

import com.ars.entiy.Schedule;
import com.ars.service.DoctorService;
import com.ars.service.ScheduleService;

@RestController
@RequestMapping("/schedules")
public class ScheduleController {
	@Autowired
    private DoctorService doctorService;

	@Autowired
    private ScheduleService scheduleService;

    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping("/all")
	@CrossOrigin(origins = "http://localhost:3000")
    public List<Schedule> getAllSchedules() {
        return scheduleService.findAll();
    }

    @GetMapping("/id/{sch_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public Schedule getScheduleById(@PathVariable int sch_id) {
        return scheduleService.findById(sch_id);
    }

    @PostMapping("/create")
	@CrossOrigin(origins = "http://localhost:3000")
    public Schedule createSchedule(@RequestBody Schedule schedule) {
        return scheduleService.createSchedule(schedule);
    }

    @PutMapping("/update/{sch_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public Schedule updateSchedule(@PathVariable int sch_id, @RequestBody Schedule schedule) {
        schedule.setSch_id(sch_id);
        return scheduleService.updateSchedule(sch_id, schedule);
    }

    @DeleteMapping("/delete/{sch_id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public void delete(@PathVariable int sch_id) {
		Schedule schedule = scheduleService.findById(sch_id);
        if (schedule != null) {
        	scheduleService.delete(sch_id);
        }
    }


}

