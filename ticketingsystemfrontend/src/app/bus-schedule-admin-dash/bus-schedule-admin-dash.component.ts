import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BusSchedule } from '../bus-schedule/bus-schedule';
import { BusScheduleService } from '../bus-schedule/bus-schedule.service';

@Component({
  selector: 'app-bus-schedule-admin-dash',
  templateUrl: './bus-schedule-admin-dash.component.html',
  styleUrls: ['./bus-schedule-admin-dash.component.css']
})
export class BusScheduleAdminDashComponent implements OnInit {

  public busSchedules : BusSchedule[]=[];
  public editBusSchedule: BusSchedule;
  public deleteBusShedule: BusSchedule;

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

  public OnAddBusSchedule(addForm: NgForm): void {
    document.getElementById('add-busschedule-form')?.click();
    this.busSheduleService.addBusSchedule(addForm.value).subscribe(
      (response: BusSchedule) => {
        console.log(response);
        this.getBusSchedule();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }



public onUpdateBusSchedule(busschedule: BusSchedule): void {
    this.busSheduleService.updateBusSchedule(busschedule).subscribe(
      (response: BusSchedule) => {
        console.log(response);
        this.getBusSchedule();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteBusSchedule(busscheduleId: number): void {
    this.busSheduleService.deleteBusSchedule(busscheduleId).subscribe(
      (response: void) => {
        console.log(response);
        this.getBusSchedule();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public onOpenModal(busschedule: BusSchedule | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      console.log("236");
      button.setAttribute('data-target', '#addBusSheduleModal');
    }
    if (mode === 'edit' ) {
      console.log("236");
      this.editBusSchedule = busschedule;
      button.setAttribute('data-target', '#updateBusSheduleModal');
    }
    if (mode === 'delete') {
      console.log("789");
      this.deleteBusShedule = busschedule;
      button.setAttribute('data-target', '#deleteBusSheduleModal');
    }
    container?.appendChild(button);
    button.click();
  }
  

}

