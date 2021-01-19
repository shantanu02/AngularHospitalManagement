import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Management, ManagementService } from '../management.service';

@Component({
  selector: 'app-registration-mgmt',
  templateUrl: './registration-mgmt.component.html',
  styleUrls: ['./registration-mgmt.component.css']
})
export class RegistrationMgmtComponent implements OnInit {
  objManagement:Management = new Management(null,null,null,null,null,null);

  constructor(private managementService: ManagementService,private router: Router) { }

  ngOnInit(): void {
  }

  AddManagement(objManagement:Management)
  {
      this.managementService.AddManagement(objManagement).subscribe(res=>{
          alert("Added");
      })
  }

}
