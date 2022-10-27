import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fare } from './fare';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FareService {

 
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getFare(): Observable<Fare[]> {
    return this.http.get<Fare[]>(`${this.apiServerUrl}/fare/all`);
  }

  public addFare(fare: Fare): Observable<Fare> {
    return this.http.post<Fare>(`${this.apiServerUrl}/fare/add`, fare);
  }
}
