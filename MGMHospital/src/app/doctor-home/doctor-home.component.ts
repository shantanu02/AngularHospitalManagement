import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Doctor } from '../doctor-service.service';
import { MedicineService, Medicine } from '../medicine.service';
import {
  CombinePatientTreatment,
  PatientExamination,
  PatientInformation,
  PatientMedicines,
  PatientService,
  PatientTreatment,
  PatientTreatment2,
} from '../patient.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css'],
})
export class DoctorHomeComponent implements OnInit {
  

  constructor(
    private patientService: PatientService,
    private router: Router,
    private medicineService: MedicineService
  ) {}

  public imgsrc = 'assets/patientpic.svg';
 
  patient_name: string = '';
  public uiAlert = false;
 
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
  objMedicine:Medicine = new Medicine(null,null,null,null);

 objPatientTreatment2:PatientTreatment2 = new PatientTreatment2(null,null,null,null,null,null,null);
  
 dosage:string = "";
 time:string="";
 doctorNote :string="";

  viewTreatment:boolean = false;
  
  docSessId:number;

  medicineId:number;
  medicineDesc:string="";
  medicineType:string="";
  medicineName:string="";
    
  patientTreatment2:PatientTreatment2[];
  AllMedicineList:Medicine[];

  medicineByType:Medicine[];

  patientList: PatientInformation[];

  medicineTypeList: String[] =[];

  showdata: any = false;

  patientExaminationList: PatientExamination[];

 

  ngOnInit(): void {
    this.objDoctor = JSON.parse(sessionStorage.getItem('doctorLogin'));
    this.docSessId = this.objDoctor.doctorId;
    if (this.objDoctor == null) {
      this.router.navigate(['homepage']);
    }
    this.patientService
      .GetAllPatientsByDoctorId(this.docSessId)
      .subscribe((res) => {
        this.patientList = res;
      });

    this.medicineService.GetMedicineType().subscribe((res) => {
      this.medicineTypeList = res;
    });
  }



  SearchPatient() {
    if (this.patient_name != '') {
      this.patientList = this.patientList.filter((res: any) => {
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
    //alert(objPatient.patientId);
    this.patientService
      .GetPatientInformation(objPatient.patientId)
      .subscribe((res) => {
        this.objPatientInformation = res;
        this.patientService
        .GetPatientExaminationByPatientId(
          this.objPatientInformation.patientId
        )
        .subscribe((result) => {
          //alert(result.patientId);
          this.patientExaminationList = result;
        }); 
      });
  }

  showMedicineType(item:string) {
    this.medicineService.GetMedicinesByType(item).subscribe(res=>{
      this.medicineByType = res;
      for(var i = 0 ; i < res.length ; i++){
        this.medicineByType[i].rowColor = false;
      }
    })
}

asd(item) {
  alert(item);
}

addMedicine()
{
  this.objPatientTreatment2.dosage = this.dosage;
  this.objPatientTreatment2.medicineId = this.medicineId;
  this.objPatientTreatment2.patientId = this.objPatientInformation.patientId;
  this.objPatientTreatment2.time = this.time;
  this.objPatientTreatment2.doctorNote = this.doctorNote;

  this.patientService.AddPatientTreatment2(this.objPatientTreatment2).subscribe(res=>{
    this.time = "";
    this.dosage = "";
    this.doctorNote = "";
    this.ViewTreatment();
  })
}
addMedicineFromList(item:Medicine)

{
  //alert(item.medicineName);
  item.rowColor = !item.rowColor;
  if(item.rowColor == true){
    this.medicineId = item.medicineId;
    this.medicineName = item.medicineName;
    this.medicineDesc = item.medicineDesc;
    this.medicineType = item.medicineType;
  }

  
 
}

ViewTreatment()
{
  this.viewTreatment = true;
  this.patientService.GetAllPatientTreatment2ByPatientId(this.objPatientInformation.patientId).subscribe(res=>{
    this.patientTreatment2 = res;
  })

  this.medicineService.GetAllMedicines().subscribe(res=>{
    this.AllMedicineList = res;
  })
}

CloseViewTreatment()
  {
    this.viewTreatment = false;

  }
 

  deleteTreatment(patientTreatmentId:number)
  {
    alert(patientTreatmentId);
    this.patientService.DeletePatientTreatment2(patientTreatmentId).subscribe(res=>{
      alert("deleted");
      this.ViewTreatment();
    })
  }









  async display() {
    this.uiAlert = true;
  }


 

}
