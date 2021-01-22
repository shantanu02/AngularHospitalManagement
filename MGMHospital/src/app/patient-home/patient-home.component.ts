import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientExamination, PatientInformation, PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css'],
})
export class PatientHomeComponent implements OnInit {
  objPatientInformation: PatientInformation = new PatientInformation(
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
  objPatientExamination: PatientExamination[];

  public imgsrc = 'assets/patientpic.svg';
  public imgsrc1 = 'assets/docnotes.jpg';
  public imgsrc2 = 'assets/nurnotes.jpg';

  public showdata = false;
  patient_name: string = '';

  public m_name: string = 'Naproxen';
  public m_type: string = 'Naprosyn';
  public m_desc: string = 'Nonsteroidal anti-inflammatory drugs';

  patient: any = [
    { p_id: 1, p_name: 'semon' },
    { p_id: 2, p_name: 'john' },
    { p_id: 3, p_name: 'Jhon' },
    { p_id: 4, p_name: 'Kroos' },
    { p_id: 5, p_name: 'Tom' },
    { p_id: 6, p_name: 'Tony' },
  ];



  treatment: any = ['Chest', 'Back', 'Head'];

  mediciens: any = [
    {
      m_id: 1,
      m_name: 'ciprofloxacin',
      m_type: 'Cipro XR',
      m_desc: 'for fever',
    },
    { m_id: 2, m_name: 'azithromycin', m_type: 'show', m_desc: 'for fever' },
    { m_id: 3, m_name: 'Jhon', m_type: 'show', m_desc: 'for fever' },
    { m_id: 4, m_name: 'Jhon', m_type: 'show', m_desc: 'for fever' },
    { m_id: 5, m_name: 'Jhon', m_type: 'show', m_desc: 'for fever' },
    { m_id: 6, m_name: 'Jhon', m_type: 'show', m_desc: 'for fever' },
  ];

  stringfyData: string = JSON.stringify(this.mediciens);

  public uiAlert = false;
  constructor(private patientService: PatientService,private router: Router) {}

  ngOnInit(): void {
    if (this.objPatientInformation == null) {
      this.router.navigate(['homepage']);
    }
    this.objPatientInformation = JSON.parse(
      sessionStorage.getItem('patientLogin')
    );

    this.patientService.GetPatientExaminationByPatientId(this.objPatientInformation.patientId).subscribe(res=>{
      this.objPatientExamination = res;
    })

  }
  async display() {
    this.uiAlert = true;
  }
}
