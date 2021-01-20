import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class adminInformation{
  constructor(
    public  admin_id:number,
    public  admin_fname:string,
    public  admin_lname:string,
    public  admin_email:string,
    public  admin_password:string,
    public  admin_phone:string,
    ) { }
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  AddAdmin(objAdmin:adminInformation)
  {
      return this.httpClient.post<adminInformation>("http://localhost:8080/admin/addAdmin",objAdmin);
  }
}
