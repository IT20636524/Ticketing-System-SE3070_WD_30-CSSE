import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusScheduleComponent } from './bus-schedule.component';

describe('BusScheduleComponent', () => {
  let component: BusScheduleComponent;
  let fixture: ComponentFixture<BusScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
