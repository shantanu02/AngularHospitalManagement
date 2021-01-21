import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class Management
{
  constructor(
    public  management_id:number,
    public  management_fname:string,
    public  management_lname:string,
    public  management_email:string,
    public  management_password:string,
    public  management_phone:string,
    ) { }
}


@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private httpClient: HttpClient) { }

  AddManagement(objManagement:Management)
  {
    return this.httpClient.post<Management>("http://localhost:8080/mgmt/addMgmt",objManagement);
  }

  GetManagement(management_email:string)
  {
    return this.httpClient.get<Management>("http://localhost:8080/mgmt/getMgmtByEmail/"+management_email);
  }
}
