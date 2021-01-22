import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nurse } from '../nurse-service.service';
import {

  Medicines,
  PatientExamination,
  PatientInformation,
  PatientService,
} from '../patient.service';

@Component({
  selector: 'app-home-nurse',
  templateUrl: './home-nurse.component.html',
  styleUrls: ['./home-nurse.component.css'],
})
export class HomeNurseComponent implements OnInit {
  constructor(private router: Router, private patientService: PatientService) {}
  objMedicinesList: Medicines[];
  medicinesByTypeList: Medicines[];
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

  objPatientExamination: PatientExamination = new PatientExamination(
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

  medicineTypeList: string[] = [
    'Chest',
    'Back',
    'Head',
    'Abdomen',
    'Neuro',
    'Extermities',
  ];

  examinationReportAlert: boolean = false;
  patientList: PatientInformation[];
  ngOnInit(): void {
    this.objNurseSession = JSON.parse(sessionStorage.getItem('nurseLogin'));
    if (this.objNurseSession == null) {
      this.router.navigate(['homepage']);
    }
    this.patientService.getAllPatientInformation().subscribe((res) => {
      this.patientList = res;
    });
  }

  RegisterPatient() {
    this.router.navigate(['registration-patient']);
  }
  showdata: any = false;
  patient_name: string = '';

  SearchPatient() {
    if (this.patient_name != '') {
      this.patientList = this.patientList.filter((res) => {
        return res.patientFName
          .toLocaleUpperCase()
          .match(this.patient_name.toLocaleUpperCase());
      });
    } else if (this.patient_name == '') {
      this.ngOnInit();
    }
  }
  showdetails(objPatient: PatientInformation) {
    this.showdata = true;
    this.patientService
      .GetPatientInformation(objPatient.patientId)
      .subscribe((res) => {
        this.objPatientInformation = res;
      });
  }

  givetreat() {
    window.alert('Give Treatment Method Called...!!');
  }

  AddPatientExamination(objPatientExamination: PatientExamination) {
    objPatientExamination.patientId = this.objPatientInformation.patientId;
    this.patientService
      .AddPatientExamination(objPatientExamination)
      .subscribe((res) => {
        this.examinationReportAlert = true;
        objPatientExamination.peDateTime = '';
        objPatientExamination.peNeck = '';
        objPatientExamination.peChest = '';
        objPatientExamination.peHeart = '';
        objPatientExamination.peNeuro = '';
        objPatientExamination.peAbdomen = '';
        objPatientExamination.peExtermities = '';
        objPatientExamination.pePulse = '';
        objPatientExamination.peResp = '';
        objPatientExamination.peBp = '';
        objPatientExamination.peTemp = '';
        objPatientExamination.peBack = '';
        objPatientExamination.pePulseOx = '';
        objPatientExamination.peFSBS = '';
        objPatientExamination.peOthers = '';
        objPatientExamination.peHead = '';
      });
  }
  examinationAlertFalse() {
    this.examinationReportAlert = false;
  }

  updatePatientInformation() {
    this.patientService
      .UpdatePatientInformation(this.objPatientInformation)
      .subscribe((res) => {
        alert('updated');
      });
  }

  // objMedicines()
  // {
  //   this.patientService.getAllMedicines().subscribe(res=>{
  //     this.objMedicinesList = res;
  //   })
  // }
  // ShowAllMedicinesOfType(medicineType:string)
  // {
  //   alert("ello");
  //     // this.patientService.getAllMedicinesOfTypes(medicineType).subscribe(res=>{
  //     //   alert(res[1].medicineName);
  //     // })
  // }

  showMedicineType(item) {
    alert(item);
  }

  asd(item) {
    alert(item);
  }
}
