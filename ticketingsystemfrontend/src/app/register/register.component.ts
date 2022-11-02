import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VERSION } from '@angular/platform-browser-dynamic';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { Passenger } from './passenger';
import { PassengerService } from './passenger.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'QRcodes';
  name = 'Angular ' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.youtube.com/c/TestyCodies/';
  
  passengerService: any;
  passengers!: Passenger[];

  constructor(passengerService:PassengerService) { }

  ngOnInit(): void {
  }

  public getPassengers(): void{
    this.passengerService.getPassengers().subscribe(
      (response: Passenger[]) => {
        this.passengers = response;
        console.log(response);
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
        console.log('error in get')
      } 
    );
  }

  public onAddPassenger(addForm:NgForm):void{
    document.getElementById('add-passenger-form')?.click();
    this.passengerService.addPassenger(addForm.value).subscribe(
      (response:Passenger) => {
        console.log(response);
        this.getPassengers();
        addForm.reset();
        alert('successful');
        console.log('success');
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
        console.log('error');
      }
    )
  }

}
