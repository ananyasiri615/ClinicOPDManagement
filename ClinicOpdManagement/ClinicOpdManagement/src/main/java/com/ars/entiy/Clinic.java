package com.ars.entiy;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "clinic")
public class Clinic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int clinicId; // Unique identifier for the clinic
    
    private String clinicName;
    private String clinicHeadDoctor;

    // Constructors, getters, setters, and other methods
    
    public Clinic() {
    }

    public Clinic(String clinicName, String clinicHeadDoctor) {
        this.clinicName = clinicName;
        this.clinicHeadDoctor = clinicHeadDoctor;
    }

    public int getClinicId() {
        return clinicId;
    }

    public void setClinicId(int clinicId) {
        this.clinicId = clinicId;
    }

    public String getClinicName() {
        return clinicName;
    }

    public void setClinicName(String clinicName) {
        this.clinicName = clinicName;
    }

    public String getClinicHeadDoctor() {
        return clinicHeadDoctor;
    }

    public void setClinicHeadDoctor(String clinicHeadDoctor) {
        this.clinicHeadDoctor = clinicHeadDoctor;
    }

    // Other methods, if needed
    
    @Override
    public String toString() {
        return "Clinic{" +
                "clinicId=" + clinicId +
                ", clinicName='" + clinicName + '\'' +
                ", clinicHeadDoctor='" + clinicHeadDoctor + '\'' +
                '}';
    }
}
