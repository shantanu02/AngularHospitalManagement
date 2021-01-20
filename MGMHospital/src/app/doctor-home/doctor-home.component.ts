import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
 
  public imgsrc = 'assets/patientpic.svg';
  public showdata = false;
  patient_name : string= "";
 
  public m_name :string ="Naproxen";
  public m_type:string ="Naprosyn";
  public m_desc:string = "Nonsteroidal anti-inflammatory drugs"

  patient :any = [
    { p_id: 1, p_name: "semon"},
    { p_id: 2, p_name: "john"},
    { p_id: 3, p_name: "Jhon"},
    { p_id: 4, p_name: "Kroos"},
    { p_id: 5, p_name: "Tom"},
    { p_id: 6, p_name: "Tony"}
    
   ]
   
   SearchPatient(){
    if(this.patient_name != ""){
      this.patient = this.patient.filter((res : any) => {
        return res.p_name.toLocaleUpperCase().match(this.patient_name.toLocaleUpperCase());
      });
    }
    else if(this.patient_name == ""){
      this.ngOnInit();
    }
    
  }
  showdetails(){
    this.showdata = true;
  }

   
   treatment:any = ['Chest','Back','Head']
  
    mediciens:any = [
   { m_id: 1, m_name: "ciprofloxacin", m_type: "Cipro XR",m_desc:"for fever"},
   { m_id: 2, m_name: "azithromycin", m_type: "show",m_desc:"for fever"},
   { m_id: 3, m_name: "Jhon", m_type: "show",m_desc:"for fever"},
   { m_id: 4, m_name: "Jhon", m_type: "show",m_desc:"for fever"},
   { m_id: 5, m_name: "Jhon", m_type: "show",m_desc:"for fever"},
   { m_id: 6, m_name: "Jhon", m_type: "show",m_desc:"for fever"}
  ]

 stringfyData : string = JSON.stringify(this.mediciens);
 

 public  uiAlert = false;
  constructor() { }

  ngOnInit(): void {
  }
  async display(){
  this.uiAlert = true;
}
}
