import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, UserLogin } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public imgsrc = 'assets/doctor.svg';
  public imgsrc1 = 'assets/background.jpg';
  public imgsrc2 = 'assets/avatar.svg';

  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  objUserLogin:UserLogin = new UserLogin(null,null,null);

  Validate(objUserLogin:UserLogin)
  {
    this.loginService.CheckLogin(objUserLogin).subscribe(res=>{
        if(res.userRole == "admin")
        {
          alert("This is admin");
        }
        else if(res.userRole == "doctor")
        {
          alert("This is doctor");
        }
        else if(res.userRole == "management")
        {
          alert("This is Management");
          this.router.navigate(['Management-Homepage']);
        }
        else if(res.userRole == "Nurse")
        {
          alert("This is Nurse");
        }
        else if(res.userRole == "patient")
        {
            alert("This is Patient");
        }
        else
        {
            alert("Unknown");
        }
    })
  }


}
