import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor, DoctorServiceService } from '../doctor-service.service';
import { LoginService, UserLogin } from '../login.service';
import { Management, ManagementService } from '../management.service';
import { Nurse, NurseServiceService } from '../nurse-service.service';
import { PatientInformation, PatientService } from '../patient.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public imgsrc = 'assets/doctor.svg';
  public imgsrc1 = 'assets/background.jpg';
  public imgsrc2 = 'assets/avatar.svg';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private managementService: ManagementService,
    private patientService: PatientService,
    private nurseServiceService: NurseServiceService,
    private doctorServiceService: DoctorServiceService
  ) {}

  ngOnInit(): void {}

  objUserLogin: UserLogin = new UserLogin(null, null, null);
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
  objDoctor: Doctor = new Doctor(
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

  Validate(objUserLogin: UserLogin) {
    this.loginService.CheckLogin(objUserLogin).subscribe((res) => {
      if (res.userRole == 'admin') {
        alert('This is admin');
      } else if (res.userRole == 'doctor') {
        alert('This is doctor');
        this.doctorServiceService
          .getDoctorByEmail(res.userEmail)
          .subscribe((result) => {
            this.objDoctor = result;
            sessionStorage.setItem(
              'doctorLogin',
              JSON.stringify(this.objDoctor)
            );
            this.router.navigate(['doctor-home']);
          });
      } else if (res.userRole == 'management') {
        alert('This is Management');
        this.managementService
          .GetManagement(res.userEmail)
          .subscribe((result) => {
            this.objManagementSession = result;
            sessionStorage.setItem(
              'mgmtLogin',
              JSON.stringify(this.objManagementSession)
            );
            this.router.navigate(['Management-Homepage']);
          });
      } else if (res.userRole == 'Nurse') {
        alert('This is Nurse');
        this.nurseServiceService
          .getNurseByEmail(res.userEmail)
          .subscribe((res) => {
            this.objNurse = res;
            sessionStorage.setItem('nurseLogin', JSON.stringify(this.objNurse));
            this.router.navigate(['nurse-home']);
          });
      } else if (res.userRole == 'patient') {
        alert('This is Patient');
        this.patientService
          .GetPatientInformationByEmail(res.userEmail)
          .subscribe((result) => {
            this.objPatientInformation = result;
            sessionStorage.setItem('patientLogin', JSON.stringify(this.objPatientInformation));
            this.router.navigate(['patient-home']);
          });
      } else {
        alert('Unknown');
      }
    });
  }
}
