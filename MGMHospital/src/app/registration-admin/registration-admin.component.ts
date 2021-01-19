import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminInformation, AdminService } from '../admin.service';

@Component({
  selector: 'app-registration-admin',
  templateUrl: './registration-admin.component.html',
  styleUrls: ['./registration-admin.component.css']
})
export class RegistrationAdminComponent implements OnInit {

  objAdmin:adminInformation = new adminInformation(null,null,null,null,null,null);
  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit(): void {
  }
  AddAdmin(objAdmin:adminInformation)
  {
    this.adminService.AddAdmin(objAdmin).subscribe(res=>{

        if(res)
        {
            alert("Registration SuccessFull");
            this.router.navigate(['homepage']);
        }else
        {
            alert("Registration Failed");
            this.router.navigate(['registration-admin']);
        }
    })
  }


}
