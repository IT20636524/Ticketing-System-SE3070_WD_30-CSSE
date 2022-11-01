import { Component, OnInit } from '@angular/core';
import { Passenger } from '../register/passenger';
import { HttpErrorResponse } from '@angular/common/http';
import { PassengerService } from '../register/passenger.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public passengers: Passenger[] = [];
  public viewPassenger!: Passenger;

  constructor(private passengerService : PassengerService) { }

  ngOnInit(): void {
    this.getPassengers();
  }

  public getPassengers() : void {
    this.passengerService.getPassengers().subscribe(
      (response : Passenger[]) => {
        this.passengers = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
