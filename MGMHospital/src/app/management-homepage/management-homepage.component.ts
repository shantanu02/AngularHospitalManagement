import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-homepage',
  templateUrl: './management-homepage.component.html',
  styleUrls: ['./management-homepage.component.css']
})
export class ManagementHomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
