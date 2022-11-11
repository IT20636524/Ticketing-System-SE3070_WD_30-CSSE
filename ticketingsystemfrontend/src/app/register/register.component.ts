import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VERSION } from '@angular/platform-browser-dynamic';
import { Passenger } from './passenger';
import { PassengerService } from './passenger.service';
import {MatDialogModule} from '@angular/material/dialog'

declare var window:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public passengers!: Passenger[];
  myAngularxQrCode:any;

  formModal:any;
  

  constructor(private passengerService:PassengerService) {
    this.myAngularxQrCode="Your Qr code data string";
  }

  // openDialog(){
  //   this.dialogRef.openDialog(PopUpComponent);
  // }

  ngOnInit(): void {
    this.getPassengers();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  //to open moadl
  openModal(){
    this.formModal.show();
  }

  doSomething(){
    this.formModal.hide();
  }

  public getPassengers(): void{
    this.passengerService.getPassengers().subscribe(
      (response: Passenger[]) => {
        this.passengers = response;
        console.log(this.passengers);  
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
        this.openModal();    
        
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
  }

}
