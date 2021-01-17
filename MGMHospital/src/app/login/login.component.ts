import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public imgsrc = 'assets/doctor.svg';
  public imgsrc1 = 'assets/background.jpg';
  public imgsrc2 = 'assets/avatar.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
