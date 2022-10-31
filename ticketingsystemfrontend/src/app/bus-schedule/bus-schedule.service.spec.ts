import { TestBed } from '@angular/core/testing';

import { BusScheduleService } from './bus-schedule.service';

describe('BusScheduleService', () => {
  let service: BusScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
