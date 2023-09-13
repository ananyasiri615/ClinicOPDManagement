package com.ars;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.ars.entiy.Doctor;
import com.ars.repository.DoctorRepository;
import com.ars.service.DoctorService;

public class DoctorServiceTest {

    @InjectMocks
    private DoctorService doctorService;

    @Mock
    private DoctorRepository doctorRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindById() {
        // Create a sample doctor
        Doctor sampleDoctor = new Doctor();
        sampleDoctor.setDoc_id(1);

        // Mock the repository to return the sample doctor
        when(doctorRepository.findById(1)).thenReturn(Optional.of(sampleDoctor));

        // Test the service method
        Doctor foundDoctor = doctorService.findById(1);

        // Verify that the correct doctor is returned
        assertNotNull(foundDoctor);
        assertEquals(1, foundDoctor.getDoc_id());
    }

    @Test
    public void testSaveNewDoctor() {
        // Create a sample doctor
        Doctor newDoctor = new Doctor();
        newDoctor.setEmail("newdoctor@example.com");

        // Mock the repository to return null (indicating email is not already registered)
        when(doctorRepository.findByEmail("newdoctor@example.com")).thenReturn(null);

        // Mock the repository to save the doctor
        when(doctorRepository.save(newDoctor)).thenReturn(newDoctor);

        // Test the service method
        Doctor savedDoctor = doctorService.save(newDoctor);

        // Verify that the doctor is saved and returned correctly
        assertNotNull(savedDoctor);
        assertEquals("newdoctor@example.com", savedDoctor.getEmail());
    }

    @Test
    public void testSaveExistingDoctor() {
        // Create a sample doctor with an email that already exists
        Doctor existingDoctor = new Doctor();
        existingDoctor.setEmail("existing@example.com");

        // Mock the repository to return an existing doctor with the same email
        when(doctorRepository.findByEmail("existing@example.com")).thenReturn(existingDoctor);

        // Test the service method
        assertThrows(RuntimeException.class, () -> doctorService.save(existingDoctor));
    }

    @Test
    public void testDeleteById() {
        // Test deleting a doctor by ID
        assertDoesNotThrow(() -> doctorService.deleteById(1));

        // Verify that the repository's deleteById method was called once with the correct ID
        verify(doctorRepository, times(1)).deleteById(1);
    }

    @Test
    public void testFindAll() {
        // Create a list of sample doctors
        List<Doctor> doctors = new ArrayList<>();
        doctors.add(new Doctor());
        doctors.add(new Doctor());

        // Mock the repository to return the list of doctors
        when(doctorRepository.findAll()).thenReturn(doctors);

        // Test the service method
        List<Doctor> foundDoctors = doctorService.findAll();

        // Verify that the correct list of doctors is returned
        assertNotNull(foundDoctors);
        assertEquals(2, foundDoctors.size());
    }

    @Test
    public void testGetDoctorByEmail() {
        // Create a sample doctor
        Doctor sampleDoctor = new Doctor();
        sampleDoctor.setEmail("sample@example.com");

        // Mock the repository to return the sample doctor
        when(doctorRepository.findByEmail("sample@example.com")).thenReturn(sampleDoctor);

        // Test the service method
        Doctor foundDoctor = doctorService.getDoctorByEmail("sample@example.com");

        // Verify that the correct doctor is returned
        assertNotNull(foundDoctor);
        assertEquals("sample@example.com", foundDoctor.getEmail());
    }

//    @Test
//    public void testCheckEmailExists() {
//        // Mock the repository to return a doctor with the given email
//        when(doctorRepository.findByEmail("existing@example.com")).thenReturn(new Doctor());
//
//        // Test the service method for an existing email
//        assertTrue(doctorService.checkEmailExists("existing@example.com"));
//
//        // Test the service method for a non-existing email
////        assertFalse(doctorService.checkEmailExists("nonexisting@example.com"));
//    }
}