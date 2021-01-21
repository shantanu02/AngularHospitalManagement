import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
  
})
export class PatientComponent implements OnInit {

  public imgsrc2 = 'assets/doctoravatar.jpg';
  public imgsrc3 = 'assets/nurseavatar.jpg';
  public imgsrc4 = 'assets/patientimg.jpg';
  constructor() { }

  headers:any= ["Medicine Name","Description","Type"];
  rows:any = [
    {
      
      "Medicine Name" : "Rahul",
     
      "Description" : "Male",
      "Type" : "India"
    },
    {
     
      "Medicine Name" : "Ajay",
      
      "Description" : "Male",
      "Type" : "India"
    },
  ]

  public imgsrc = 'assets/patientpic.svg';
    List: any = ['Amrita', 'Amol', 'Ashwani','Dipesh', 'Harshit', 'Shantnu','Vipul','bhagyshree','shashank']


    showdata: any = false;
    patient_name : string= "";
  
    PatientList = [
      {"p_no": 100, "p_name" : "Amol Shinde"},
      {"p_no": 110, "p_name" : "Dipesh Patil"},
      {"p_no": 120, "p_name" : "Vipul Zope"},
      {"p_no": 130, "p_name" : "Shantanu Upase"},
      {"p_no": 140, "p_name" : "Shashank Agam"},
      {"p_no": 150, "p_name" : "Amrita Tiwari"},
      {"p_no": 160, "p_name" : "Ashwini Jadhav"},
      {"p_no": 170, "p_name" : "Bhagyashree Deore"},
      {"p_no": 180, "p_name" : "Harshit Jain"},
    ];
  
    SearchPatient(){
      if(this.patient_name != ""){
        this.PatientList = this.PatientList.filter(res=>{
          return res.p_name.toLocaleUpperCase().match(this.patient_name.toLocaleUpperCase());
        });
      }else if(this.patient_name == ""){
        this.ngOnInit();
      }
      
    }
  
    showdetails(){
      this.showdata = true;
    }

    
  
  display = "none";
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  display1 = "none";
  openModal1() {
    this.display1 = "block";
  }
  onCloseHandled1() {
    this.display1 = "none";
  }

  ngOnInit(): void {
  }

}
