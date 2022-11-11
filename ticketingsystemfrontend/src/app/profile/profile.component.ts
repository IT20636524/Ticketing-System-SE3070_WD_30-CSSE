import { Component, OnInit } from '@angular/core';
import { Passenger } from '../register/passenger';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PassengerService } from '../register/passenger.service';
import { NgForm } from '@angular/forms';
import { Account } from '../account/account';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public passengers: Passenger[] = [];
  
  user !: Passenger;
  id!: number;
  fullName!: string;
  email!: string;
  mobile!: string;
  password!: string;
  acc!: Account;
  credit!: string;

  constructor(
    private passengerService: PassengerService,
    private accountService: AccountService,
    private http: HttpClient) { }


  ngOnInit(): void {
    this.getPassengers();
    this.getCredit();
  }


  public getPassengers(): void {
    this.passengerService.getPassengers().subscribe(
      (response: Passenger[]) => {
        this.user = response[0];
        this.id = this.user.id;
        this.email = this.user.email;
        this.fullName = this.user.fullName;
        this.mobile = this.user.mobile;
        this.password = this.user.password;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onUpdatePassenger(passenger: Passenger): void {
    if (this.id) {
      passenger.id = this.id;
    }
    this.passengerService.updatePassenger(passenger).subscribe(
      (response: Passenger) => {
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCredit(): void {
    this.accountService.getAccounts().subscribe(
      (response: Account[]) => {
        this.acc = response[0];
        this.credit = this.acc.credit;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddCredit(creditForm: NgForm): void {
    document.getElementById('add-credit-form')?.click();
    this.accountService.addAccount(creditForm.value).subscribe(
      (response: Account) => {
        console.log(response);
        alert("Credit added successfully");
        creditForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        creditForm.reset();
      }
    );
  }
  public onOpenModal(mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add') {
      button.setAttribute('data-target', '#addCreditModal');
    }
    container?.appendChild(button);
    button.click();
  }

}