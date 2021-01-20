import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './login/login.component';
import { RegistrationDoctorComponent } from './registration-doctor/registration-doctor.component';
import { RegistrationNurseComponent } from './registration-nurse/registration-nurse.component';
import { RegistrationPatientComponent } from './registration-patient/registration-patient.component';
import { RegistrationAdminComponent } from './registration-admin/registration-admin.component';
import { RegistrationMgmtComponent } from './registration-mgmt/registration-mgmt.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { Robot1Component } from './robot1/robot1.component';
import { Robot2Component } from './robot2/robot2.component';
import { ManagementHomepageComponent } from './management-homepage/management-homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    DepartmentComponent,
    DoctorComponent,
    LoginComponent,
    RegistrationDoctorComponent,
    RegistrationNurseComponent,
    RegistrationPatientComponent,
    RegistrationAdminComponent,
    RegistrationMgmtComponent,
    DoctorHomeComponent,
    Robot1Component,
    Robot2Component,
    ManagementHomepageComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
