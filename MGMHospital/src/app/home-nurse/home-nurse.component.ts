import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nurse } from '../nurse-service.service';
import { PatientExamination, PatientInformation, PatientService } from '../patient.service';

@Component({
  selector: 'app-home-nurse',
  templateUrl: './home-nurse.component.html',
  styleUrls: ['./home-nurse.component.css'],
})
export class HomeNurseComponent implements OnInit {
  constructor(private router: Router, private patientService: PatientService) {}
  patientList: PatientInformation[];
  examinationReportAlert: boolean = false;
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

  ngOnInit(): void {
    this.objNurseSession = JSON.parse(sessionStorage.getItem('nurseLogin'));
    if (this.objNurseSession == null) {
      this.router.navigate(['homepage']);
    }

    this.patientService.getAllPatientInformation().subscribe((res) => {
      this.patientList = res;
    });
  }

  showdata: any = false;
  patient_name: string = '';
  // ===========================================

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

  givetreat() {
    window.alert('Give Treatment Method Called...!!');
  }
  // ============================
  AddPatientInformation() {
    this.router.navigate(['registration-patient']);
  }

  showdetails(objPatient: PatientInformation) {
    this.showdata = true;
    this.patientService
      .GetPatientInformation(objPatient.patientId)
      .subscribe((res) => {
        this.objPatientInformation = res;
      });
  }

  DeletePatient(patient_id: number) {
    this.patientService
      .DeletePatientInformation(patient_id)
      .subscribe((res) => {
        this.showdata = false;
        this.ngOnInit();
      });
  }

  AddPatientExamination(objPatientExamination: PatientExamination) {
      objPatientExamination.patientId = this.objPatientInformation.patientId;
      this.patientService
        .AddPatientExamination(objPatientExamination)
        .subscribe((res) => {
          this.examinationReportAlert = true;
           objPatientExamination.peDateTime = "";
           objPatientExamination.peNeck = "";
           objPatientExamination.peChest = "";
           objPatientExamination.peHeart = "";
           objPatientExamination.peNeuro = "";
           objPatientExamination.peAbdomen = "";
           objPatientExamination.peBack = "";
           objPatientExamination.peExtermities = "";
           objPatientExamination.pePulse= "";
           objPatientExamination.peResp = "";
           objPatientExamination.peBp = "";
           objPatientExamination.peTemp = "";
           objPatientExamination.pePulseOx= "";
           objPatientExamination.peFSBS= "";
           objPatientExamination.peOthers = "";
           objPatientExamination.peHead = "";
        });
    }

    examinationAlertFalse() {
      this.examinationReportAlert = false;
    }

    updatePatientInformation()
    {
      this.patientService.UpdatePatientInformation(this.objPatientInformation).subscribe(res=>{

      })
    }
}
