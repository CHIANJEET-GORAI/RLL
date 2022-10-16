import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavestatusdashboardComponent } from './leavestatusdashboard.component';

describe('LeavestatusdashboardComponent', () => {
  let component: LeavestatusdashboardComponent;
  let fixture: ComponentFixture<LeavestatusdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavestatusdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavestatusdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
