import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BusSchedule } from '../bus-schedule/bus-schedule';
import { BusScheduleService } from '../bus-schedule/bus-schedule.service';

@Component({
  selector: 'app-bus-schedule-admin',
  templateUrl: './bus-schedule-admin.component.html',
  styleUrls: ['./bus-schedule-admin.component.css']
})
export class BusScheduleAdminComponent implements OnInit {

  public busSchedules : BusSchedule[]=[];

  constructor(private busSheduleService: BusScheduleService){}

  ngOnInit() {
    this.getBusSchedule();
    
  }

  public getBusSchedule(): void {
    this.busSheduleService.getBusSchedule().subscribe(
      (response: BusSchedule[]) => {
        this.busSchedules = response;
        console.log(this.busSchedules);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
