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


  public imgsrc = 'assets/patientpic.svg';
  //public showdata = false;
  patient_name: string = '';

  patientList: PatientInformation[] = [];
  patientExaminationList: PatientExamination[] = [];

  docSessId: number  ;

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
  medicineType: String = '';

  combinePatientTreatment: CombinePatientTreatment = new CombinePatientTreatment(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );

  patientTreatment: PatientTreatment = new PatientTreatment(
    null,
    null,
    null,
    null,
    null
  );
  patientMedicines: PatientMedicines = new PatientMedicines(
    null,
    null,
    null,
    null,
    null
  );

  allPatientMedicinesList: PatientMedicines[];

  patientMedicinesList: PatientMedicines[];

  ptIdList: number[];

  patientTreatment2: PatientTreatment2 = new PatientTreatment2(null,null,null,null,null,null,null);

  patientTreatment2List: PatientTreatment2[];

  patId : number;
  
  medicineTypeList: String[] = [];

  medicinesListByType: Medicine[] = [];

  medicineList: Medicine[] = [];

  stringfyData: string = JSON.stringify(this.medicinesListByType);

  time: string = '';
  dosage: string = '';
  docNote: string = '';

  public uiAlert = false;

 delId:number;


 objPatientTreatment2:PatientTreatment2 = new PatientTreatment2(null,null,null,null,null,null,null);
  //dosage:string = "";
  //time:string="";
  nurseNote :string="";
  medicineId:number;
  medicineDesc:string="";
 // medicineType:string="";
  medicineName:string="";



  

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

 

 


  constructor(
    private patientService: PatientService,
    private router: Router,
    private medicineService: MedicineService
  ) {}

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
showdata:boolean = false;


  async display() {
    this.uiAlert = true;
  }

  getPatientInformationByPatientId(patientId: number) {
    this.showdata = true;
    this.patientService
      .GetPatientInformationByPatientId(patientId)
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



  getMedicinesByType(medicineType: String) {
    this.medicineService.GetMedicinesByType(medicineType).subscribe((res) => {
      this.medicinesListByType = res;
    });
  }

  addMedicine()
  {
    this.objPatientTreatment2.dosage = this.dosage;
    this.objPatientTreatment2.medicineId = this.medicineId;
    this.objPatientTreatment2.patientId = this.objPatientInformation.patientId;
    this.objPatientTreatment2.time = this.time;
    this.objPatientTreatment2.nurseNote = this.nurseNote;

    this.patientService.AddPatientTreatment2(this.objPatientTreatment2).subscribe(res=>{
      this.time = "";
      this.dosage = "";
      this.nurseNote = "";
    })
  }
  addMedicineFromList(item:Medicine)
  {
    this.medicineId = item.medicineId;
    this.medicineName = item.medicineName;
    this.medicineDesc = item.medicineDesc;
    this.medicineType = item.medicineType;
  }






  AddPatientTreatmentAndMedicines(
    combinePatientTreatment: CombinePatientTreatment,
    medicineId: number
  ) {
    
    //alert(medicineId + '  medicinbe id ');
    this.patientTreatment2.medicineId = medicineId;
    //this.patientTreatment2.medicineId = medicineId;
    //alert(this.patientTreatment2.medicineId);
    this.patientTreatment2.dosage = this.dosage;
    this.patientTreatment2.time = this.time;
    this.patientTreatment2.patientId = this.objPatientInformation.patientId;
    this.patientTreatment2.doctorNote = this.docNote;
    //alert(this.patientTreatment2.doctorNote + ' doc note');

    this.patientService
      .AddPatientTreatment2(this.patientTreatment2)
      .subscribe((res) => {
        //alert(res + ' added');
        this.uiAlert = true;
        //this.patientTreatment2List = null;

        //alert(this.objPatientInformation.patientId+"    patient id before seklecting med")

        this.patientService.GetAllPatientTreatment2ByPatientId(this.objPatientInformation.patientId).subscribe((result) => {
      
          this.patientTreatment2List = result;
          console.log(this.patientTreatment2List);
         

        });
        
        this.medicineService.GetAllMedicines().subscribe((ress) => {
            this.medicineList = ress;
            //from here name with matching id
            //alert(this.medicineList[0].medicineName);
        });




        

      });
  }


  DeleteMedicinebyPt2Id(pt2Id: number){
    this.patientService.DeletePatientTreatment2ByPt2Id(pt2Id).subscribe((res)=>{
      alert(res);
      if(res==1){
        alert("Medicine deleted");
      }else{
        alert("something went wrong while deleting");
      }
    })
  }


  setTime(time: string) {
    //alert(time);
    this.time = time;
    //this.patientMedicines.pmTime = time;
    //alert(this.patientMedicines.pmTime);
  }

  setDosage(dosage: string) {
    this.dosage = dosage;
  }

  setDoctorNotes(doctorNotes: string) {
    this.docNote = doctorNotes;
  }

  sendPt2Id(id: number){
    this.delId = id;
  }

 

}
