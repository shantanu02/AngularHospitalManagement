import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor-service.service';
import { HeaderService } from '../header.service';
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
    null,null
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

  hide :boolean=false;
  constructor(private router: Router,private headerService: HeaderService) {
    this.headerService.hide.subscribe(res => {
      this.hide = res;
    })
  }

  ngOnInit(): void {
    

    
    
    
  }

  Logout() {
    this.headerService.hide.next(false);
    sessionStorage.clear();
    this.router.navigate(['/homepage']);
  }
 

  Homepage() {
    
    const role = sessionStorage.getItem('role');

    if (role ==  'nurse') {
      this.router.navigate(['nurse-home']);
    }
    else if (role ==  'doctor') {
      this.router.navigate(['doctor-home']);
    }
    else if (role ==  'mgmt') {
      this.router.navigate(['Management-Homepage']);
    } else {
      this.router.navigate(['homepage']);
    }
  }
}
