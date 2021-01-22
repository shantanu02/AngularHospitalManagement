import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor-service.service';
import { MedicineService , Medicine } from '../medicine.service';
import { CombinePatientTreatment, PatientExamination, PatientInformation, PatientMedicines, PatientService, PatientTreatment, PatientTreatment2 } from '../patient.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

  public imgsrc = 'assets/patientpic.svg';
  public showdata = false;
  patient_name : string= "";

  patientList : PatientInformation[] = [];
  patientExaminationList : PatientExamination[] = [];

  docSessId: number = 1 ;

  objPatientInformation: PatientInformation = new PatientInformation(null,null,null,null,
    null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,null,null);
  objPatientExamination: PatientExamination = new PatientExamination(null,null,null,null,null,null
    ,null,null,null,null,null,null,null,null,null,null,null,null);

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
    medicineType : String = "";

    combinePatientTreatment : CombinePatientTreatment = new CombinePatientTreatment(null,null,null,null,null,null,null,null);

    patientTreatment : PatientTreatment = new PatientTreatment(null,null,null,null,null);
    patientMedicines : PatientMedicines = new PatientMedicines(null,null,null,null,null);

    allPatientMedicinesList :  PatientMedicines[];

    patientMedicinesList :  PatientMedicines[];

    ptIdList: number[];

    patientTreatment2 : PatientTreatment2;
    
    patientTreatment2List : PatientTreatment2[];

   SearchPatient(){
    if(this.patient_name != ""){
      this.patientList = this.patientList.filter((res : any) => {
        return res.patientFName.toLocaleUpperCase().match(this.patient_name.toLocaleUpperCase());
      });
    }
    else if(this.patient_name == ""){
      this.ngOnInit();
    }

  }
  showdetails(){
    this.showdata = true;
  }

  //for medicines

   medicineTypeList :String[] = [];

    medicinesListByType:Medicine[] = [];

   stringfyData : string = JSON.stringify(this.medicinesListByType);

   time :string="";
   dosage :string="";
   docNote :string="";

 public  uiAlert = false;



  constructor(private patientService: PatientService , private router: Router , private medicineService:MedicineService) { }

  ngOnInit(): void {
    this.objDoctor = JSON.parse(sessionStorage.getItem('doctorLogin'));
    if (this.objDoctor == null) {
      this.router.navigate(['homepage']);
    }
    this.patientService.GetAllPatientsByDoctorId(this.docSessId).subscribe(res =>{

      this.patientList = res;
    });

    this.medicineService.GetMedicineType().subscribe(res =>{
      this.medicineTypeList = res;
    })

  }
  async display(){
  this.uiAlert = true;
}

getPatientInformationByPatientId(patientId:number){
  this.patientService.GetPatientInformationByPatientId(patientId).subscribe(res =>{
    this.objPatientInformation = res;
    this.patientService.GetPatientExaminationByPatientId(this.objPatientInformation.patientId).subscribe(result =>{
      //alert(result.patientId);
     this.patientExaminationList = result;

    });
  });
}

// selectChangeHandler (event: any) {
//   //update the ui
//   this.selectedDay = event.target.value;
// }

getMedicinesByType(medicineType:String){
  this.medicineService.GetMedicinesByType(medicineType).subscribe(res =>{

    this.medicinesListByType = res;
  });
}

AddPatientTreatmentAndMedicines(combinePatientTreatment:CombinePatientTreatment,medicineId : number){


  this.patientTreatment2.medicineId = medicineId;
  this.patientTreatment2.dosage = this.dosage;
  this.patientTreatment2.time = this.time;
  this.patientTreatment2.patientId =  this.objPatientInformation.patientId ;
  this.patientTreatment2.doctorNote = this.docNote;
 
  this.patientService.AddPatientTreatment2(this.patientTreatment2).subscribe(res =>{
      alert(res+" added");
  });



}

setTime(time:string){
  //alert(time);
  this.time = time;
  //this.patientMedicines.pmTime = time;
  //alert(this.patientMedicines.pmTime);
}

setDosage(dosage :string){
  this.dosage = dosage;
}

setDoctorNotes(doctorNotes :string){
  this.docNote = doctorNotes;
}

}
