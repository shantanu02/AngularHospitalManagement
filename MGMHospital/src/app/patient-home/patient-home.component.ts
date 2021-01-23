import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine, MedicineService } from '../medicine.service';
import {
  PatientExamination,
  PatientInformation,
  PatientService,
  PatientTreatment2,
} from '../patient.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css'],
})
export class PatientHomeComponent implements OnInit {


  
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
  objPatientExamination: PatientExamination[];


  public imgsrc = 'assets/patientpic.svg';
  public imgsrc1 = 'assets/docnotes.jpg';
  public imgsrc2 = 'assets/nurnotes.jpg';

  public showdata = false;

  patient_name: string = '';

  public uiAlert = false;

  constructor(private patientService: PatientService, private router: Router
    ,private medicineService: MedicineService) {}
    datetime:string = "";
  PatientTreatment2List:PatientTreatment2[];
  AllMedicineList:Medicine[];

  ngOnInit(): void {
    if(sessionStorage.length === 0){
      this.router.navigate(['/login']);
    }
    this.objPatientInformation = JSON.parse(
      sessionStorage.getItem('patientLogin')
    );
    if (this.objPatientInformation == null) {
      this.router.navigate(['homepage']);
    }

    this.patientService
      .GetPatientExaminationByPatientId(this.objPatientInformation.patientId)
      .subscribe((res) => {
        this.objPatientExamination = res;
      });


        this.patientService.GetAllPatientTreatment2ByPatientId(this.objPatientInformation.patientId).subscribe(res=>{
          this.PatientTreatment2List = res;

        })

        this.medicineService.GetAllMedicines().subscribe(res=>{
          this.AllMedicineList = res;
        })

  }
  async display() {
    this.uiAlert = true;
  }
}
