import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Passenger } from '../register/passenger';
import { PassengerService } from '../register/passenger.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  // public passengers: Passenger[] = [];
  // public viewPassenger!: Passenger;

  constructor() { }
  // constructor(private passengerService : PassengerService) { }

  ngOnInit(): void {
  }
  // public getPassengers() : void {
  //   this.passengerService.getPassengers().subscribe(
  //     (response : Passenger[]) => {
  //       this.passengers = response;
  //     },
  //     (error : HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
  
  // public onOpenProfile(passenger: Passenger, mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'row');
  //   if(mode === 'view') {
  //     this.viewPassenger = passenger;
  //     button.setAttribute('data-target', '#viewProfile');
  //   }
  //   container?.appendChild(button);
  //   button.click();
  // }
}
