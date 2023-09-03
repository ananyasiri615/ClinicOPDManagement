package com.ars.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.ars.entiy.Schedule;
import com.ars.repository.ScheduleRepository;

@Service
public class ScheduleService {
	
	@Autowired
    private ScheduleRepository scheduleRepository;

    public Iterable<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }
    
    public Schedule findById(int sch_id) {
        return scheduleRepository.findById(sch_id).orElse(null);
    }
    
    public Schedule createSchedule(@RequestBody Schedule schedule) {
        return scheduleRepository.save(schedule);
    }
    
    public Schedule updateSchedule(@PathVariable int sch_id, @RequestBody Schedule schedule) {
        schedule.setSch_id(sch_id);
        return scheduleRepository.save(schedule);
    }
    
    public void delete(@PathVariable int sch_id) {
		Optional<Schedule> schedule = scheduleRepository.findById(sch_id);
        if (schedule != null) {
        	scheduleRepository.deleteById(sch_id);
        }
    }

    public List<Schedule> findAll() {
        return scheduleRepository.findAll();
    }
}