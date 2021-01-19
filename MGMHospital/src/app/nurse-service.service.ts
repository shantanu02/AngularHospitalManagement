import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Nurse
{
  constructor(
    public  nurseId:number,
    public  nurseFName:string,
    public  nurseLName:string,
    public  nurseEmail:string,
    public  nursePassword:string,
    public  nursePhone:string,
    public  nurseAddress:string,
    public  nurseCity:string,
    public  nurseZipCode:string,
    public  nurseState:string,
    public  nurseGender:string,
    public  nurseDOB:string,
    public  nurseQualification:string,
    public  nurseExperience:string
    ) { }
}

@Injectable({
  providedIn: 'root'
})
export class NurseServiceService {

  constructor(private httpClient:HttpClient) { }

  Addnurse(objNurse:Nurse)
  {
    return this.httpClient.post<Nurse>("http://localhost:8080/nurse/addNurse",objNurse);
  }
}
