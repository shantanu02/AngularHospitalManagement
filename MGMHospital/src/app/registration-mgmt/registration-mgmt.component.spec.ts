import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMgmtComponent } from './registration-mgmt.component';

describe('RegistrationMgmtComponent', () => {
  let component: RegistrationMgmtComponent;
  let fixture: ComponentFixture<RegistrationMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
