import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Passenger } from "./passenger";

@Injectable({
    providedIn:'root'
})

export class PassengerService {
    private apiServeUrl = '';

    constructor(private http: HttpClient){}

    public addPassenger(passenger: Passenger): Observable<Passenger>{
        return this.http.post<Passenger>(`${this.apiServeUrl}/passenger/add`,passenger);
    }
}