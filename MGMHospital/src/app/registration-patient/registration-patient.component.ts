import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientInformation, PatientService } from '../patient.service';

@Component({
  selector: 'app-registration-patient',
  templateUrl: './registration-patient.component.html',
  styleUrls: ['./registration-patient.component.css'],
})
export class RegistrationPatientComponent implements OnInit {
  patientInformation: PatientInformation = new PatientInformation(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );

  constructor(private patientService: PatientService, private router: Router) {}

  isPatient = true;

  ngOnInit(): void {
    if (sessionStorage.getItem('nurseLogin') == null) {
      this.isPatient = false;
      
    } else {
      this.isPatient = true;
    }
  }
  

  AddPatientInformation(patientInformation: PatientInformation) {
    this.patientService
      .AddPatientInformation(patientInformation)
      .subscribe((res) => {
        alert(res);
        if (res) {
          alert('Patient Added Successfully');
          if (sessionStorage.getItem('nurseLogin') == null) {
            this.router.navigate(['login']);
          } else {
            this.router.navigate(['nurse-home']);
          }
        } else {
          alert('Patient already exists');
        }
      });
  }
}
