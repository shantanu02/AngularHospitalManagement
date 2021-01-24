import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  public imgsrc = 'assets/forget.svg';
  public uiEmail = true;
  public uiForget = false;
  public uiEmailAlert = false;
  public uiAlert = false;
  public email: string = "hospital123@gmail.com";

  /* -------------------------------Validation-----------------------------*/

  public fbFormGroup1 = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9_\\.]+@[a-zA-Z0-9_\\.]+(\\.[a-zA-Z0-9_\\.]+)+$'
        ),
      ],
    ],
  });
  public fbFormGroup2 = this.fb.group({
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
    rpassword: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
  });

  emailId : string ;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.uiEmail = true;
    this.uiForget = false;
    this.uiAlert = false;
    sessionStorage.removeItem('fsemail');
  }

  async authEmailHere() {
    const data = this.fbFormGroup1.value;

    console.log(data.email);
    console.log(this.email);

    if (data.email === this.email) {

      this.uiEmail = false;
      this.uiForget = true;
      this.uiEmailAlert = false;
    }
    else {
      this.uiEmailAlert = true;
      sessionStorage.removeItem('fsemail');
    }
  }

  async updatePassword() {
    const data = this.fbFormGroup2.value;
    if (data.password == data.rpassword) {

      let x = sessionStorage.getItem('fsemail');
      this.router.navigate(['login']);
    }
    else {

      this.uiAlert = true;
    }
  }




}
