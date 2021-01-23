import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nurse } from '../nurse-service.service';
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

  objNurseSession: Nurse = new Nurse(
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

  ngOnInit(): void {}

  AddPatientInformation(patientInformation: PatientInformation) {
    this.patientService
      .AddPatientInformation(patientInformation)
      .subscribe((res) => {
        alert(res);
        if (res) {
          alert('Patient Added Successfully');
          this.objNurseSession = JSON.parse(sessionStorage.getItem('nurseLogin'));
          if (sessionStorage.getItem('nurseLogin') == null) {
            this.router.navigate(['homepage']);
          } else {
            this.router.navigate(['nurse-home']);
          }
        } else {
          alert('Patient already exists');
        }
      });
  }
}
