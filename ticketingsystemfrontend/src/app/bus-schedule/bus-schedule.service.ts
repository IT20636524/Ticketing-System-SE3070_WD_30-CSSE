import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusSchedule } from './bus-schedule';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusScheduleService {


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getBusSchedule(): Observable<BusSchedule[]> {
    return this.http.get<BusSchedule[]>(`${this.apiServerUrl}/busschedule/all`);
  }

  public addBusSchedule(busschedule: BusSchedule): Observable<BusSchedule> {
    return this.http.post<BusSchedule>(`${this.apiServerUrl}/busschedule/add`, busschedule);
  }

  public updateBusSchedule(busschedule: BusSchedule): Observable<BusSchedule> {
    return this.http.put<BusSchedule>(`${this.apiServerUrl}/busschedule/update`, busschedule);
  }

  public deleteBusSchedule(busscheduleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/busschedule/delete/${busscheduleId}`);
  }


}
