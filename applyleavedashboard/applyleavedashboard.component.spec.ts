import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyleavedashboardComponent } from './applyleavedashboard.component';

describe('ApplyleavedashboardComponent', () => {
  let component: ApplyleavedashboardComponent;
  let fixture: ComponentFixture<ApplyleavedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyleavedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyleavedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
