import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nurse, NurseServiceService } from '../nurse-service.service';

@Component({
  selector: 'app-registration-nurse',
  templateUrl: './registration-nurse.component.html',
  styleUrls: ['./registration-nurse.component.css']
})
export class RegistrationNurseComponent implements OnInit {

  objNurse:Nurse = new Nurse(null,null,null,null,null,null,null,null,null,null,null,null,null,null);
  constructor(private nurseServiceService:NurseServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  AddNurse(objNurse:Nurse)
  {
      this.nurseServiceService.Addnurse(objNurse).subscribe(res=>{
         if(res)
         {
           alert("Registration SuccessFull");
           this.router.navigate(['homepage']);
         }
         else
         {
           alert("Registration Failed");
         }
      })
  }



}
