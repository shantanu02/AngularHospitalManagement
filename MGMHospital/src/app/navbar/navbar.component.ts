import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor-service.service';
import { Management } from '../management.service';
import { Nurse } from '../nurse-service.service';
import { PatientInformation } from '../patient.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  objManagementSession: Management = new Management(
    null,
    null,
    null,
    null,
    null,
    null
  );
  objNurse: Nurse = new Nurse(
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
  objDoctorSession: Doctor = new Doctor(
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
  objPatientInformation: PatientInformation = new PatientInformation(
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.objManagementSession = JSON.parse(sessionStorage.getItem('mgmtLogin'));
    this.objNurse = JSON.parse(sessionStorage.getItem('nurseLogin'));
    this.objDoctorSession = JSON.parse(sessionStorage.getItem('doctorLogin'));
    this.objPatientInformation = JSON.parse(sessionStorage.getItem('patientLogin')
    );
  }

  LogoutManagement() {
    sessionStorage.removeItem('mgmtLogin');
    this.router.navigate(['/homepage']);
  }
  LogoutNurse() {
    sessionStorage.removeItem('nurseLogin');
    this.router.navigate(['/homepage']);
  }

  LogoutDoctor() {
    sessionStorage.removeItem('doctorLogin');
    this.router.navigate(['/homepage']);
  }
  LogoutPatient()
  {
    sessionStorage.removeItem('patientLogin');
    this.router.navigate(['/homepage']);
  }

  Homepage() {
    if (this.objNurse != null) {
      this.router.navigate(['nurse-home']);
    }
    if (this.objDoctorSession != null) {
      this.router.navigate(['doctor-home']);
    }
    if (this.objManagementSession != null) {
      this.router.navigate(['Management-Homepage']);
    } else {
      this.router.navigate(['homepage']);
    }
  }
}
