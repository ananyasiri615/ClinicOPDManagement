package com.ars.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ars.entiy.Queue;
import com.ars.service.QueueService;

@RestController
@RequestMapping("/queues")
public class QueueController {

	@Autowired
    private QueueService queueService;

	@GetMapping("/index")
	public String index() {
		return "Success";
	}
	
    public QueueController(QueueService queueService) {
        this.queueService = queueService;
    }

    @GetMapping("/all")
    public List<Queue> getAllqueues() {
        return queueService.findAll();
    }

    @GetMapping("/id/{q_id}")
    public Queue getqueueById(@PathVariable Integer q_id) {
        return queueService.findById(q_id);
    }

    @PostMapping("/create")
    public Queue createqueue(@RequestBody Queue queue) {
        return queueService.save(queue);
    }

    @PutMapping("/update/{q_id}")
    public Queue updatequeue(@PathVariable Integer q_id, @RequestBody Queue queue) {
        queue.setQ_id(q_id);
        return queueService.save(queue);
    }

    @DeleteMapping("/delete/{q_id}")
    public void delete(@PathVariable Integer q_id) {
    	Queue queue = queueService.findById(q_id);
        if (queue != null) {
        	queueService.deleteById(q_id);
        }
    }

}