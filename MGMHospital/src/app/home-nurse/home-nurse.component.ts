import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine, MedicineService } from '../medicine.service';
import { Nurse } from '../nurse-service.service';
import {

  Medicines,
  PatientExamination,
  PatientInformation,
  PatientService,
  PatientTreatment2,
} from '../patient.service';

@Component({
  selector: 'app-home-nurse',
  templateUrl: './home-nurse.component.html',
  styleUrls: ['./home-nurse.component.css'],
})
export class HomeNurseComponent implements OnInit {
  constructor(private router: Router, private patientService: PatientService,private medicineService:MedicineService) {}
  objMedicinesList: Medicine[];
  medicinesByTypeList: Medicine[];
  tableMedicineName:string="Medicine Name"
  tableMedicineDosage:string = "Dosage";
  tableMedicineTime:string="Time";
  tableMedicineNurseNotes="Nurse Notes"
  tableAction:string="Action";
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

  objMedicine:Medicine = new Medicine(null,null,null,null);

  objPatientTreatment2:PatientTreatment2 = new PatientTreatment2(null,null,null,null,null,null,null);
  dosage:string = "";
  time:string="";
  nurseNote :string="";
  viewTreatment:boolean = false;
  medicineId:number;
  medicineDesc:string="";
  medicineType:string="";
  medicineName:string="";

  patientTreatment2:PatientTreatment2[];
  AllMedicineList:Medicine[];


  medicineTypeList: string[] = [
    'Chest',
    'Back',
    'Head',
    'Abdomen',
    'Neuro',
    'Extermities',
  ];

  medicineByType:Medicine[];
  examinationReportAlert: boolean = false;
  patientList: PatientInformation[];
  ngOnInit(): void {
    this.objNurseSession = JSON.parse(sessionStorage.getItem('nurseLogin'));
    if (this.objNurseSession == null) {
      this.router.navigate(['homepage']);
    }
    this.patientService.getAllPatientInformationByNurseId(this.objNurseSession.nurseId).subscribe((res) => {
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


  showMedicineType(item:string) {
      this.medicineService.GetMedicinesByType(item).subscribe(res=>{
        this.medicineByType = res;
      })
  }

  asd(item) {
    alert(item);
  }
  deletePatientInformation(patientid:number)
  {
      this.patientService.DeletePatientInformation(patientid).subscribe(res=>{
        this.showdata = false;
        this.ngOnInit();
      })
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
      this.ViewTreatment();
    })
  }
  addMedicineFromList(item:Medicine)
  {
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
    this.patientService.DeletePatientTreatment2(patientTreatmentId).subscribe(res=>{
      this.ViewTreatment();
    })
  }

  SendRobot()
  {
    this.router.navigate(['robot1']);
  }
}
