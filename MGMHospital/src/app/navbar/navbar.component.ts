import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Management } from '../management.service';
import { Nurse } from '../nurse-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  objManagementSession: Management = new Management(
    null,
    null,
    null,
    null,
    null,
    null
  );
  objNurse: Nurse = new Nurse(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.objManagementSession = JSON.parse(sessionStorage.getItem('mgmtLogin'));
    this.objNurse = JSON.parse(sessionStorage.getItem('nurseLogin'));
  }

  LogoutManagement() {
    sessionStorage.removeItem('mgmtLogin');
    this.router.navigate(['/homepage']);
  }
  LogoutNurse()
  {
    sessionStorage.removeItem('nurseLogin');
    this.router.navigate(['/homepage']);
  }
}
