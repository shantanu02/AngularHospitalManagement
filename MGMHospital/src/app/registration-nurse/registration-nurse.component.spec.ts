import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationNurseComponent } from './registration-nurse.component';

describe('RegistrationNurseComponent', () => {
  let component: RegistrationNurseComponent;
  let fixture: ComponentFixture<RegistrationNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationNurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
