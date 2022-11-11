import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Account } from "./account";

@Injectable({
    providedIn:'root'
})

export class AccountService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public addAccount(account: Account): Observable<Account>{
        return this.http.post<Account>(`${this.apiServerUrl}/account/add`,account);
    }
    public getAccounts() : Observable<Account[]> {
        return this.http.get<Account[]>(`${this.apiServerUrl}/account/all`);
    }

}