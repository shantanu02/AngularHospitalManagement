import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';


import { RegistrationDoctorComponent } from './registration-doctor/registration-doctor.component';
import { RegistrationNurseComponent } from './registration-nurse/registration-nurse.component';
import { RegistrationPatientComponent } from './registration-patient/registration-patient.component';
import { RegistrationAdminComponent } from './registration-admin/registration-admin.component';
import { RegistrationMgmtComponent } from './registration-mgmt/registration-mgmt.component';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
  {path:'registration-doctor',component:RegistrationDoctorComponent},
  {path:'registration-nurse',component:RegistrationNurseComponent},
  {path:'registration-patient',component:RegistrationPatientComponent},
  {path:'registration-admin',component:RegistrationAdminComponent},
  {path:'registration-mgmt',component:RegistrationMgmtComponent},
  
  {path:'',redirectTo:'/registration-doctor',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
