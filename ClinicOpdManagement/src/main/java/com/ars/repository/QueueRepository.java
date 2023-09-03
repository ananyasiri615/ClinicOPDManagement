package com.ars.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ars.entiy.Queue;

@Repository
public interface QueueRepository extends JpaRepository<Queue, Integer> {

}
