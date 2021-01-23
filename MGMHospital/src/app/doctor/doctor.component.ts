import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientInformation, PatientService } from '../patient.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  
  constructor(private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {

    

  }




}
