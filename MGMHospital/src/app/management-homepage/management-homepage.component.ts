import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor, DoctorServiceService } from '../doctor-service.service';
import { Management } from '../management.service';
import { Nurse, NurseServiceService } from '../nurse-service.service';
import { PatientInformation, PatientService } from '../patient.service';

@Component({
  selector: 'app-management-homepage',
  templateUrl: './management-homepage.component.html',
  styleUrls: ['./management-homepage.component.css']
})
export class ManagementHomepageComponent implements OnInit {


  constructor(private router: Router,private patientService: PatientService , private doctorService : DoctorServiceService , private nurseService : NurseServiceService) { }
  objManagementSession:Management = new Management(null,null,null,null,null,null);
   objPatientInformation:PatientInformation = new PatientInformation(null,null,null,null,null,null,
   null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
  patientList:PatientInformation[]=[];

  nurseList:Nurse[] = [];
  doctorList:Doctor[] = [];
  nId:number;
  dId:number;  

  ngOnInit(): void {
    if(sessionStorage.length === 0){
      this.router.navigate(['/login']);
    }
    this.objManagementSession = JSON.parse(sessionStorage.getItem('mgmtLogin'));
    //window.location.reload();

  }

  showPatients(){
    this.patientService.getAllPatientInformation().subscribe(res => {
     
      this.patientList = res;
    });
    
    this.nurseService.getAllNurse().subscribe(res => {
      
      this.nurseList = res;
    });

    this.doctorService.getAllDoctor().subscribe(res => {
      
      this.doctorList = res;
    });  

  }

  assignDoctorNurse(){
      this.objPatientInformation.doctorId = this.dId;
      this.objPatientInformation.nurseId = this.nId;

      this.patientService.UpdatePatientInformation(this.objPatientInformation).subscribe(res =>{
        
      });

  }
  setPatient(p:PatientInformation){
    p.rowColor = !p.rowColor;
    if(p.rowColor == true){
      this.objPatientInformation = p;
    }
     
  }

  registerDoctor()
  {
    this.router.navigate(['registration-doctor']);
  }

  registerNurse()
  {
    this.router.navigate(['registration-nurse']);
  }
}
