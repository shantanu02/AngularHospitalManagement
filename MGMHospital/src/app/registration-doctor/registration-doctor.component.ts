import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor, DoctorServiceService } from '../doctor-service.service';

@Component({
  selector: 'app-registration-doctor',
  templateUrl: './registration-doctor.component.html',
  styleUrls: ['./registration-doctor.component.css'],

})
export class RegistrationDoctorComponent implements OnInit {

  objDoctor:Doctor = new Doctor(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);

  constructor(private doctorServiceService:DoctorServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  AddDoctor(objDoctor:Doctor)
  {
      this.doctorServiceService.AddDoctor(objDoctor).subscribe(res=>{
        if(res)
        {
            alert("Registration SuccessFull");
            this.router.navigate(['login']);
        }else
        {
            alert("Registration Failed");
            this.router.navigate(['registration-doctor']);
        }
      })
  }

}
