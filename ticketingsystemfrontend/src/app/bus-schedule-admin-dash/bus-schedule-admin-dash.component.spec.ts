import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusScheduleAdminDashComponent } from './bus-schedule-admin-dash.component';

describe('BusScheduleAdminDashComponent', () => {
  let component: BusScheduleAdminDashComponent;
  let fixture: ComponentFixture<BusScheduleAdminDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusScheduleAdminDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusScheduleAdminDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
