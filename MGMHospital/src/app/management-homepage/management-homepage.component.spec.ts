import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementHomepageComponent } from './management-homepage.component';

describe('ManagementHomepageComponent', () => {
  let component: ManagementHomepageComponent;
  let fixture: ComponentFixture<ManagementHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
