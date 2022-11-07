import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusSchedule } from '../bus-schedule/bus-schedule';

@Injectable({
  providedIn: 'root'
})
export class BusScheduleAdminService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getBusSchedule(): Observable<BusSchedule[]> {
    return this.http.get<BusSchedule[]>(`${this.apiServerUrl}/busschedule/all`);
  }
}
