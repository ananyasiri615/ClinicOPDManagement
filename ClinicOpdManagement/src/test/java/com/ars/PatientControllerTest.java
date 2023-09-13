//package com.ars;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//import static org.mockito.Mockito.when;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//import com.ars.controller.PatientController;
//import com.ars.entiy.Patient;
//import com.ars.repository.PatientRepository;
//import com.ars.service.PatientService;
//
//public class PatientControllerTest {
//
//    @InjectMocks
//    private PatientController patientController;
//
//    @Mock
//    private PatientService patientService;
//    
//    private PatientRepository patientRepository;
//
//    @BeforeEach
//    public void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    public void getAllPatientsTest() {
//        // Create a mock list of patients
//        List<Patient> patients = new ArrayList<>();
//        patients.add(new Patient(1, "John Doe", 30, "Male", "123-456-7890", "123 Main Street", "john.doe@example.com", "password", "Medical history"));
//
//        // Mock the patient service to return the list of patients
//        when(patientService.findAll()).thenReturn(patients);
//
//        // Call the getAllPatients() endpoint
//        List<Patient> result = patientController.getAllPatients();
//
//        // Assert that the result is not null
//        assertNotNull(result);
//
//        // Assert that the result contains the list of patients
//        assertEquals(patients, result);
//    }
//
//    @Test
//    public void getPatientByIdTest() {
//        // Create a mock patient
//        Patient patient = new Patient(1, "John Doe", 30, "Male", "123-456-7890", "123 Main Street", "john.doe@example.com", "password", "Medical history");
//
//        // Mock the patient service to return the patient
//        when(patientService.findById(1)).thenReturn(patient);
//
//        // Call the getPatientById() endpoint
//        Patient result = patientController.getPatientById(1);
//
//        // Assert that the result is not null
//        assertNotNull(result);
//
//        // Assert that the result is the mock patient
//        assertEquals(patient, result);
//    }
//
//    @Test
//    public void createPatientTest() {
//        // Create a new patient
//        Patient patient = new Patient(1, "John Doe", 30, "Male", "123-456-7890", "123 Main Street", "john.doe@example.com", "password", "Medical history");
//
//        // Mock the patient service to save the patient
//        when(patientService.save(patient)).thenReturn(patient);
//
//        // Call the createPatient() endpoint
//        patientController.createPatient(patient);
//
//        // Assert that the patient was saved
//        assertEquals(patient, patientService.findById(1));
//    }
//
//    @Test
//    public void updatePatientTest() {
//        // Create an existing patient
//        Patient patient = new Patient(1, "John Doe", 30, "Male", "123-456-7890", "123 Main Street", "john.doe@example.com", "password", "Medical history");
//
//        // Update the patient's name
//        patient.setPatientName("Jane Doe");
//
//        // Mock the patient service to save the patient
//        when(patientService.save(patient)).thenReturn(patient);
//
//        // Call the updatePatient() endpoint
//        patientController.updatePatient(1, patient);
//
//        // Assert that the patient was updated
//        assertEquals("Jane Doe", patientService.findById(1).getPatientName());
//    }
//
//}