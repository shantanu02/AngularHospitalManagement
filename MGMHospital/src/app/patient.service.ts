import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class PatientInformation{
  constructor(
    public patientId:number,
    public patientFName:string,
    public patientLName:string,
    public patientEmail:string,
    public patientPassword:string,
    public patientAddress:string,
    public patientTempAddress:string,
    public patientCity:string,
    public patientZipCode:string,
    public patientState:string,
    public patientGender:string,
    public patientDOB:string,
    public patientPhone:string,
    public patientWeight:number,
    public patientTriage:string,
    public patientLMP:string,
    public patientComplaint : string,
    public patientAllergies:string,
    public patientMedicalHistory:string,
    public patientSID :string,
    public patientOPD :string,
    public patientIPD :string,
    public patientWard :string,
    public patientBedNo :string,
    public doctorId :number,
    public nurseId :number

  ){}
}

export class PatientExamination{
  constructor(


    public peId:number,
    public peDateTime :string,
    public peHead :string,
    public peNeck :string,
    public peChest:string,
    public peBack:string,
    public peHeart:string,
    public peNeuro:string,
    public peBack:string,
    public peAbdomen:string,
    public peExtermities:string,
    public peOthers:string,
    public pePulse:string,
    public peResp:string,
    public peBp:string,
    public peTemp:string,
    public pePulseOx:string,
    public peFSBS:string,
    public patientId:number


  ){}
}

export class PatientTreatment {
  constructor(

    public ptId:number,
    public ptNurseNote :string,
    public ptMDNote:string,
    public ptDoctorNote :string,

    public patientId:number,


  ){}

}
export class PatientMedicines{
  constructor(
    public pmId:number,
    public pmDosage:string,
    public pmTime:string,
    public ptId:number,
    public medicineId:number
  ){}
}

export class PatientTest{
  constructor(
    public pTestId:number,
    public pTestConsultant:string,
    public pTestStatus:string,
    public medicalTestId:number,
    public ptId:number
  ){}

}

export class CombinePatientTreatment{
  constructor(
   
    public ptNurseNote :string,
    public ptMDNote:string,
    public ptDoctorNote :string,
    public patientId:number,
    public pmId:number,
    public pmDosage:string,
    public pmTime:string,
    public medicineId:number
  ){}
}


@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private httpClient: HttpClient) { }


  AddPatientInformation(patientInformation : PatientInformation){
      return this.httpClient.post<number>("http://localhost:8080/patient/addPatientInformation",patientInformation);

  }

  AddPatientExamination(patientExamination : PatientExamination){
    return this.httpClient.post<number>("http://localhost:8080/patient/addPatientExamination",patientExamination);
  }


  AddPatientTreatment(patientTreatment : PatientTreatment){
    return this.httpClient.post<number>("http://localhost:8080/patient/addPatientTreatment",patientTreatment);
  }

  AddPatientMedicines(patientMedicines: PatientMedicines){
    return this.httpClient.post<number>("http://localhost:8080/patient/addPatientMedicines",patientMedicines);
  }

  AddPatientTest(patientTest : PatientTest){
    return this.httpClient.post<number>("http://localhost:8080/patient/addPatientTest",patientTest);
  }

  DeletePatientInformation(patientId : number){
    return this.httpClient.delete<number>("http://localhost:8080/patient/deletePatientInformation/"+patientId);

  }

  DeletePatientExamination(peId:number){
    return this.httpClient.delete<number>("http://localhost:8080/patient/deletePatientExamination/"+peId);
  }

  DeletePatientTreatment(ptId:number){
    return this.httpClient.delete<number>("http://localhost:8080/patient/deletePatientTreatment/"+ptId);
  }

  DeletePatientMedicines(pmId:number){
    return this.httpClient.delete<number>("http://localhost:8080/patient/deletePatientMedicines/"+pmId);
  }

  DeletePatientTest(pTestId:number){
    return this.httpClient.delete<number>("http://localhost:8080/patient/deletePatientTest/"+pTestId);
  }

  UpdatePatientInformation(patientInformation:PatientInformation){
    return this.httpClient.put<number>("http://localhost:8080/patient/updatePatientInformation",patientInformation);
  }

  UpdatePatientExamination(patientExamination:PatientExamination){
    return this.httpClient.put<number>("http://localhost:8080/patient/updatePatientExamination",patientExamination);
  }

  UpdatePatientTreatment(patientTreatment:PatientTreatment){
    return this.httpClient.put<number>("http://localhost:8080/patient/updatePatientTreatment",patientTreatment);
  }

  UpdatePatientMedicines(patientMedicines:PatientMedicines){
    return this.httpClient.put<number>("http://localhost:8080/patient/updatePatientMedicines",patientMedicines);
  }

  UpdatePatientTest(patientTest:PatientTest){
    return this.httpClient.put<number>("http://localhost:8080/patient/updatePatientTest",patientTest);
  }

  GetPatientInformation(patientId:number){
    return this.httpClient.get<PatientInformation>("http://localhost:8080/patient/getPatientInformation/"+patientId);
  }
  GetPatientInformationByEmail(patient_email:string){
    return this.httpClient.get<PatientInformation>("http://localhost:8080/patient/getPatientInformationByEmail/"+patient_email);
  }

  getAllPatientInformation()
  {
    return this.httpClient.get<PatientInformation[]>("http://localhost:8080/patient/getAllPatientInformation");
  }


  GetAllPatientsByDoctorId(doctorId:number){
    return this.httpClient.get<PatientInformation[]>("http://localhost:8080/patient/getPatientInformationByDoctorId/"+doctorId);

  }
  
  GetPatientInformationByPatientId(patientId : number){
    return this.httpClient.get<PatientInformation>("http://localhost:8080/patient/getPatientInformation/"+patientId);
  }
  
  GetPatientExaminationByPatientId(patientId : number){
    return this.httpClient.get<PatientExamination[]>("http://localhost:8080/patient/getPatientExaminationByPatientId/"+patientId);
  }

  GetPtIdByPatientId(patientId: number){
    return this.httpClient.get<number[]>("http://localhost:8080/patient/getPtIdByPatientId/"+patientId);
  }


  GetPatientMedicineByPtId(ptId: number){
    return this.httpClient.get<PatientMedicines[]>("http://localhost:8080/patient/getPatientMedicinesByPtId/"+ptId);
  }

  GetAllPAtientMedicines(){
    return this.httpClient.get<PatientMedicines[]>("http://localhost:8080/patient/getAllPatientMedicines");
  }



}
