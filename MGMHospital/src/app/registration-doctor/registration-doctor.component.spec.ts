import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDoctorComponent } from './registration-doctor.component';

describe('RegistrationDoctorComponent', () => {
  let component: RegistrationDoctorComponent;
  let fixture: ComponentFixture<RegistrationDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
