package com.ars.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ars.entiy.Queue;
import com.ars.repository.QueueRepository;

@Service
public class QueueService {

	@Autowired
	private QueueRepository queueRepository;
	
	 public QueueService(QueueRepository queueRepository) {
	        this.queueRepository = queueRepository;
	    }

	    public Queue findById(Integer q_id) {
	        return queueRepository.findById(q_id).orElse(null);
	    }

	    public Queue save(Queue queue) {
	        return queueRepository.save(queue);
	    }

	    public void deleteById(Integer q_id) {
	    	queueRepository.deleteById(q_id);
	    }

		public List<Queue> findAll() {
			return queueRepository.findAll();
		}

}