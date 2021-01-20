import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robot2',
  templateUrl: './robot2.component.html',
  styleUrls: ['./robot2.component.css']
})
export class Robot2Component implements OnInit {
  headers:any= ["Medicine Name","Description","Dossage"];
  rows:any = [
    {
      
      "Medicine Name" : "crossin",
     
      "Description" : "Fever tablet",
      "Dossage" : "Fever tablet"
    },
    {
      
      "Medicine Name" : "crossin",
     
      "Description" : "Fever tablet",
      "Dossage" : "Fever tablet"
    },
    {
      
      "Medicine Name" : "crossin",
     
      "Description" : "Fever tablet",
      "Dossage" : "Fever tablet"
    },
    {
     
      "Medicine Name" : "crossin",
      
      "Description" : "Fever tablet",
      "Dossage" : "Fever tablet"
    },
  ]
user:string="Vipul";

  constructor() { }

  ngOnInit(): void {
  }

}
