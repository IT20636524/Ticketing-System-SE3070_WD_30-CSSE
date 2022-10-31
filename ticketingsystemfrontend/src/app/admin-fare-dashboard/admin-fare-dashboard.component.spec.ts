import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFareDashboardComponent } from './admin-fare-dashboard.component';

describe('AdminFareDashboardComponent', () => {
  let component: AdminFareDashboardComponent;
  let fixture: ComponentFixture<AdminFareDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFareDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFareDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
