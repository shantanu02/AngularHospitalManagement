import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { RegistrationDoctorComponent } from './registration-doctor/registration-doctor.component';
import { RegistrationNurseComponent } from './registration-nurse/registration-nurse.component';
import { RegistrationPatientComponent } from './registration-patient/registration-patient.component';
import { RegistrationAdminComponent } from './registration-admin/registration-admin.component';
import { RegistrationMgmtComponent } from './registration-mgmt/registration-mgmt.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    RegistrationDoctorComponent,
    RegistrationNurseComponent,
    RegistrationPatientComponent,
    RegistrationAdminComponent,
    RegistrationMgmtComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
