import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Doctor
{
  constructor(
    public doctorId:number,
    public  doctorFName:string,
    public  doctorLName:string,
    public  doctorEmail:string,
    public  doctorPassword:string,
    public  doctorPhone:string,
    public  doctorAddress:string,
    public  doctorCity:string,
    public  doctorZipCode:string,
    public  doctorState:string,
    public  doctorGender:string,
    public  doctorDOB:string,
    public  doctorQualification:string,
    public  doctorSpecialization:string,
    public  doctorExperience:number,
    ) { }
}

@Injectable({
  providedIn: 'root'
})

export class DoctorServiceService {

  constructor(private httpClient: HttpClient) { }

  AddDoctor(objDoctor:Doctor)
  {
    return this.httpClient.post<Doctor>("http://localhost:8080/doctor/addDoctor",objDoctor);
  }

  getDoctorByEmail(doctor_email:string)
  {
    return this.httpClient.get<Doctor>("http://localhost:8080/doctor/getDoctorByEmail/"+doctor_email);
  }

  getAllDoctor(){
    return this.httpClient.get<Doctor[]>("http://localhost:8080/doctor/getAllDoctor");
  }
}
