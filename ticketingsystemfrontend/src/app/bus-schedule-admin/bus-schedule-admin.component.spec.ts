import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusScheduleAdminComponent } from './bus-schedule-admin.component';

describe('BusScheduleAdminComponent', () => {
  let component: BusScheduleAdminComponent;
  let fixture: ComponentFixture<BusScheduleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusScheduleAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusScheduleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
