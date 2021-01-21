import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginComponent } from './login/login.component';
import { RegistrationDoctorComponent } from './registration-doctor/registration-doctor.component';
import { RegistrationNurseComponent } from './registration-nurse/registration-nurse.component';
import { RegistrationPatientComponent } from './registration-patient/registration-patient.component';
import { RegistrationAdminComponent } from './registration-admin/registration-admin.component';
import { RegistrationMgmtComponent } from './registration-mgmt/registration-mgmt.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { Robot1Component } from './robot1/robot1.component';
import { Robot2Component } from './robot2/robot2.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
  {path:'registration-doctor',component:RegistrationDoctorComponent},
  {path:'registration-nurse',component:RegistrationNurseComponent},
  {path:'registration-patient',component:RegistrationPatientComponent},
  {path:'registration-admin',component:RegistrationAdminComponent},
  {path:'registration-mgmt',component:RegistrationMgmtComponent},
   {path:'homepage', component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'department', component:DepartmentComponent},
  {path:'doctor', component:DoctorComponent},
  {path:'doctor-home', component:DoctorHomeComponent},
  {path:'robot1', component:Robot1Component},
  {path:'robot2', component:Robot2Component},
  {path:'forget-password', component:ForgetPasswordComponent},
  {path:'patient-home', component:PatientHomeComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'error-page', component:ErrorPageComponent},

  {path:'', redirectTo:'homepage', pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
