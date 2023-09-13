package com.ars;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.ars.entiy.Appointment;
import com.ars.entiy.Doctor;
import com.ars.entiy.Patient;
import com.ars.entiy.Queue;
import com.ars.entiy.Reminder;
import com.ars.exceptions.AppointmentNotFoundException;
import com.ars.repository.AppointmentRepository;
import com.ars.repository.QueueRepository;
import com.ars.repository.ReminderRepository;
import com.ars.service.AppointmentService;
import com.ars.service.DoctorService;
import com.ars.service.PatientService;

public class AppointmentServiceTest {

    @InjectMocks
    private AppointmentService appointmentService;

    @Mock
    private AppointmentRepository appointmentRepository;

    @Mock
    private ReminderRepository reminderRepository;

    @Mock
    private QueueRepository queueRepository;

    @Mock
    private PatientService patientService;

    @Mock
    private DoctorService doctorService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testRescheduleAppointment() {
        // Create a sample appointment
        Appointment appointment = new Appointment();
        appointment.setApp_id(1);

        // Mock appointment repository to return the sample appointment
        when(appointmentRepository.findById(1)).thenReturn(Optional.of(appointment));

        // New date and time for rescheduling
        Date newDate = new Date();
        Time newTime = new Time(14, 0, 0);

        // Test the service method
        assertDoesNotThrow(() -> appointmentService.rescheduleAppointment(1, newDate, newTime));

        // Verify that the appointment's date and time have been updated
        assertEquals(newDate, appointment.getAppointmentDate());
        assertEquals(newTime, appointment.getAppointmentTime());
    }

    @Test
    public void testRescheduleNonExistingAppointment() {
        // Mock appointment repository to return an empty optional (indicating the appointment doesn't exist)
        when(appointmentRepository.findById(1)).thenReturn(Optional.empty());

        // New date and time for rescheduling
        Date newDate = new Date();
        Time newTime = new Time(14, 0, 0);

        // Test the service method for a non-existing appointment
        assertThrows(AppointmentNotFoundException.class, () -> appointmentService.rescheduleAppointment(1, newDate, newTime));
    }

    @Test
    public void testFindByAppointment() {
        // Create a sample appointment
        Appointment appointment = new Appointment();
        appointment.setApp_id(1);

        // Mock appointment repository to return the sample appointment
        when(appointmentRepository.findById(1)).thenReturn(Optional.of(appointment));

        // Test the service method
        Appointment foundAppointment = appointmentService.findByAppointment(1);

        // Verify that the correct appointment is returned
        assertNotNull(foundAppointment);
        assertEquals(1, foundAppointment.getApp_id());
    }

    @Test
    public void testFindByNonExistingAppointment() {
        // Mock appointment repository to return an empty optional (indicating the appointment doesn't exist)
        when(appointmentRepository.findById(1)).thenReturn(Optional.empty());

        // Test the service method for a non-existing appointment
        assertThrows(AppointmentNotFoundException.class, () -> appointmentService.findByAppointment(1));
    }

    @Test
    public void testGetAppointmentByDate() {
        // Create a sample date
        Date date = new Date();

        // Create a list of sample appointments for the date
        List<Appointment> appointments = new ArrayList<>();
        appointments.add(new Appointment());
        appointments.add(new Appointment());

        // Mock appointment repository to return the list of appointments
        when(appointmentRepository.findByAppointmentDate(date)).thenReturn(appointments);

        // Test the service method
        List<Appointment> foundAppointments = appointmentService.getAppointmentByDate(date);

        // Verify that the correct list of appointments is returned
        assertNotNull(foundAppointments);
        assertEquals(2, foundAppointments.size());
    }
    
    // Add more test cases for edge cases and error scenarios as needed.

}