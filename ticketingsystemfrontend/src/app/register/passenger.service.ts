import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Passenger } from "./passenger";

@Injectable({
    providedIn:'root'
})

export class PassengerService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public addPassenger(passenger: Passenger): Observable<Passenger>{
        return this.http.post<Passenger>(`${this.apiServerUrl}/passenger/add`,passenger);
    }
    public getPassengers() : Observable<Passenger[]> {
        return this.http.get<Passenger[]>(`${this.apiServerUrl}/passenger/all`);
    }
}