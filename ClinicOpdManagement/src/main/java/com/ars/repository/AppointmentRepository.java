package com.ars.repository;


import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ars.entiy.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
    @Query("SELECT COUNT(a.appointmentDate) FROM Appointment a WHERE a.appointmentDate = :app_date")
    int countAppBydate(@Param("app_date") Date appDate);
    List<Appointment> findByAppointmentDate(Date date);

}

