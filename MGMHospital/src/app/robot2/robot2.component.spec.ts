import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Robot2Component } from './robot2.component';

describe('Robot2Component', () => {
  let component: Robot2Component;
  let fixture: ComponentFixture<Robot2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Robot2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Robot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
