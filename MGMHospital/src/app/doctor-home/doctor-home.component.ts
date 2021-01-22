import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService , Medicine } from '../medicine.service';
import { CombinePatientTreatment, PatientExamination, PatientInformation, PatientMedicines, PatientService, PatientTreatment } from '../patient.service';

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

  docSessId: number = 1;

  objPatientInformation: PatientInformation = new PatientInformation(null,null,null,null,
    null,null,null,null,null,null,
    null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,null,null);
  objPatientExamination: PatientExamination = new PatientExamination(null,null,null,null,null,null
    ,null,null,null,null,null,null,null,null,null,null,null,null);
    
    medicineType : String = "";
    
    combinePatientTreatment : CombinePatientTreatment = new CombinePatientTreatment(null,null,null,null,null,null,null,null);

    patientTreatment : PatientTreatment = new PatientTreatment(null,null,null,null,null);
    patientMedicines : PatientMedicines = new PatientMedicines(null,null,null,null,null);

    allPatientMedicinesList :  PatientMedicines[];

    patientMedicinesList :  PatientMedicines[];

    ptIdList: number[];



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
  
   this.patientMedicines.medicineId = medicineId;
  
   this.patientMedicines.pmDosage =  this.dosage ;
   this.patientMedicines.pmTime = this.time ;
  

   this.patientTreatment.ptDoctorNote =this.docNote ;
   
   this.patientTreatment.patientId =  this.objPatientInformation.patientId ;
   //alert(this.patientTreatment.patientId);

  //alert(this.patientMedicines.medicineId);
  //alert( this.combinePatientTreatment.medicineId);
   this.patientService.AddPatientTreatment(this.patientTreatment).subscribe(res=>{
     this.patientMedicines.ptId = res;
     this.patientService.AddPatientMedicines(this.patientMedicines).subscribe(res=>{
      this.uiAlert = true;
      //alert(res);
        // this.time="";
        // this.docNote="";
        // this.dosage="";

        this.patientService.GetPtIdByPatientId(this.objPatientInformation.patientId).subscribe(res=>{
          this.ptIdList = res;
          //alert(this.ptIdList[0]);

          this.patientService.GetAllPAtientMedicines().subscribe(res=>{
          
            this.allPatientMedicinesList = res;
            alert(this.allPatientMedicinesList.length);
          });

          let k = 0 ;
          for (let i = 0; i < this.ptIdList.length; i++) {
            for(let j = 0 ; j < this.allPatientMedicinesList.length ; j++){
              if (this.ptIdList[i] == this.allPatientMedicinesList[j].ptId ){
               
                this.patientMedicinesList[k] =this.patientMedicinesList[j]; 
                alert(this.patientMedicinesList[k]);
              }
              k++;
            }

          }


        });



     });
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
