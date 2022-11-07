import { TestBed } from '@angular/core/testing';

import { BusScheduleAdminService } from './bus-schedule-admin.service';

describe('BusScheduleAdminService', () => {
  let service: BusScheduleAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusScheduleAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
