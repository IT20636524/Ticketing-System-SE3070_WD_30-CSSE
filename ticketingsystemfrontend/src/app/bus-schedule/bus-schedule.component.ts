import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BusSchedule } from './bus-schedule';
import { BusScheduleService } from './bus-schedule.service';

@Component({
  selector: 'app-bus-schedule',
  templateUrl: './bus-schedule.component.html',
  styleUrls: ['./bus-schedule.component.css']
})
export class BusScheduleComponent implements OnInit {

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
