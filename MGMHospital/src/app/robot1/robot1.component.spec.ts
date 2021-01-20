import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Robot1Component } from './robot1.component';

describe('Robot1Component', () => {
  let component: Robot1Component;
  let fixture: ComponentFixture<Robot1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Robot1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Robot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
