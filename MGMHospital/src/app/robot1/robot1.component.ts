import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robot1',
  templateUrl: './robot1.component.html',
  styleUrls: ['./robot1.component.css']
})
export class Robot1Component implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
