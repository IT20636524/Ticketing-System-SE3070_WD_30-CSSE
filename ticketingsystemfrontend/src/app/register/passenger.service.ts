import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Passenger } from "./passenger";

@Injectable({
    providedIn:'root'
})

export class PassengerService {
    private apiServeUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public addPassenger(passenger: Passenger): Observable<Passenger>{
        return this.http.post<Passenger>(`${this.apiServeUrl}/passenger/add`,passenger);
    }
}