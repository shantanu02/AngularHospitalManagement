import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { }

  userObj

  ngOnInit(): void {
    
    if(sessionStorage.length != 0){
      this.headerService.hide.next(true);
    }


    const role = sessionStorage.getItem('role');
    if(!role){
      return;
    }

    if (role ==  'nurse') {
      this.router.navigate(['nurse-home']);
    }
    else if (role ==  'doctor') {
      this.router.navigate(['doctor-home']);
    }
    else if (role ==  'mgmt') {
      this.router.navigate(['Management-Homepage']);
    } else {
      this.router.navigate(['homepage']);
    }
     
   
  }

}
