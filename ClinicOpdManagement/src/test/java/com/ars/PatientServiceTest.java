//package com.ars;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNull;
//import static org.junit.jupiter.api.Assertions.assertTrue;
//import static org.mockito.Mockito.*;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//import com.ars.entiy.Patient;
//import com.ars.repository.PatientRepository;
//import com.ars.service.PatientService;
//
//public class PatientServiceTest {
//
//    @InjectMocks
//    private PatientService patientService;
//
//    @Mock
//    private PatientRepository patientRepository;
//
//    @BeforeEach
//    public void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    public void testFindById() {
//        // Arrange
//        Integer patientId = 1;
//        Patient expectedPatient = new Patient();
//        expectedPatient.setId(patientId);
//        when(patientRepository.findById(patientId)).thenReturn(Optional.of(expectedPatient));
//
//        // Act
//        Patient actualPatient = patientService.findById(patientId);
//
//        // Assert
//        assertEquals(expectedPatient, actualPatient);
//    }
//
//    @Test
//    public void testFindByIdNotFound() {
//        // Arrange
//        Integer patientId = 1;
//        when(patientRepository.findById(patientId)).thenReturn(Optional.empty());
//
//        // Act
//        Patient actualPatient = patientService.findById(patientId);
//
//        // Assert
//        assertNull(actualPatient);
//    }
//
//    @Test
//    public void testSave() {
//        // Arrange
//        Patient patientToSave = new Patient();
//        patientToSave.setEmail("test@example.com");
//        when(patientRepository.findByEmail(patientToSave.getEmail())).thenReturn(null);
//        when(patientRepository.save(patientToSave)).thenReturn(patientToSave);
//
//        // Act
//        Patient savedPatient = patientService.save(patientToSave);
//
//        // Assert
//        assertEquals(patientToSave, savedPatient);
//    }
//
//    @Test(expected = RuntimeException.class)
//    public void testSaveDuplicateEmail() {
//        // Arrange
//        Patient patientToSave = new Patient();
//        patientToSave.setEmail("test@example.com");
//        when(patientRepository.findByEmail(patientToSave.getEmail())).thenReturn(patientToSave);
//
//        // Act
//        patientService.save(patientToSave);
//    }
//
//    @Test
//    public void testDeleteById() {
//        // Arrange
//        Integer patientId = 1;
//        doNothing().when(patientRepository).deleteById(patientId);
//
//        // Act
//        patientService.deleteById(patientId);
//
//        // Assert (verify that deleteById was called)
//        verify(patientRepository, times(1)).deleteById(patientId);
//    }
//
//    @Test
//    public void testFindAll() {
//        // Arrange
//        List<Patient> expectedPatients = new ArrayList<>();
//        when(patientRepository.findAll()).thenReturn(expectedPatients);
//
//        // Act
//        List<Patient> actualPatients = patientService.findAll();
//
//        // Assert
//        assertEquals(expectedPatients, actualPatients);
//    }
//
//    @Test
//    public void testGetPatientByEmail() {
//        // Arrange
//        String email = "test@example.com";
//        Patient expectedPatient = new Patient();
//        expectedPatient.setEmail(email);
//        when(patientRepository.findByEmail(email)).thenReturn(expectedPatient);
//
//        // Act
//        Patient actualPatient = patientService.getPatientByEmail(email);
//
//        // Assert
//        assertEquals(expectedPatient, actualPatient);
//    }
//
//    @Test
//    public void testCheckEmailExists() {
//        // Arrange
//        String email = "test@example.com";
//        Patient patientWithEmail = new Patient();
//        when(patientRepository.findByEmail(email)).thenReturn(patientWithEmail);
//
//        // Act
//        boolean emailExists = patientService.checkEmailExists(email);
//
//        // Assert
//        assertTrue(emailExists);
//    }
//
//    @Test
//    public void testCheckEmailDoesNotExist() {
//        // Arrange
//        String email = "nonexistent@example.com";
//        when(patientRepository.findByEmail(email)).thenReturn(null);
//
//        // Act
//        boolean emailExists = patientService.checkEmailExists(email);
//
//        // Assert
//        assertFalse(emailExists);
//    }
//}