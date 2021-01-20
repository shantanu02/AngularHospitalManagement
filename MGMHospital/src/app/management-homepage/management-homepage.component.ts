import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Management } from '../management.service';

@Component({
  selector: 'app-management-homepage',
  templateUrl: './management-homepage.component.html',
  styleUrls: ['./management-homepage.component.css']
})
export class ManagementHomepageComponent implements OnInit {

  constructor(private router: Router) { }
  objManagementSession:Management = new Management(null,null,null,null,null,null);

  ngOnInit(): void {
    this.objManagementSession = JSON.parse(sessionStorage.getItem('mgmtLogin'));

  }




  registerDoctor()
  {
    this.router.navigate(['registration-doctor']);
  }

  registerNurse()
  {
    this.router.navigate(['registration-nurse']);
  }
}
