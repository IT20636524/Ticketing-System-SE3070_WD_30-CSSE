import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VERSION } from '@angular/platform-browser-dynamic';
import jsPDF from 'jspdf';
import { Passenger } from './passenger';
import { PassengerService } from './passenger.service';
import html2canvas from 'html2canvas'

declare var window: any;

// pdf
// @ViewChild('content', {static:false}) el!: ElementRef<HTMLElement>;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public passengers!: Passenger[];
  myAngularxQrCode: any;

  formModal: any;


  constructor(private passengerService: PassengerService) {
    
  }

  ngOnInit(): void {
    this.getPassengers();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  //download pdf
  download(){
      var element= <HTMLElement> document.getElementById("qr");
      html2canvas(element).then((canvas) => {
        var imgData = canvas.toDataURL('image/png')
        var doc = new jsPDF()
        var imageHeight = canvas.height*208/canvas.width;
        doc.addImage(imgData,0,0,208,imageHeight)
        doc.save("image.pdf")
      })
  }

  //to open modal
  openModal() {
    this.formModal.show();
  }

  //to close modal
  doSomething() {
    this.formModal.hide();
  }

  //to create pdf
  // makePDF() {
  //   let pdf = new jsPDF('p','pt','a4');
  //   pdf.html(this.el.nativeElement,{
  //     callback:(pdf)=> {
  //       pdf.save("sample.pdf");
  //     }
  //   })
  // }

  public getPassengers(): void {
    this.passengerService.getPassengers().subscribe(
      (response: Passenger[]) => {
        this.passengers = response;
        console.log(this.passengers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log('error in get')
      }
    );
  }

  public onAddPassenger(addForm: NgForm): void {
    document.getElementById('add-passenger-form')?.click();
    this.passengerService.addPassenger(addForm.value).subscribe(
      (response: Passenger) => {
        console.log(response);
        this.getPassengers();
        addForm.reset();
        localStorage.setItem('id', response.id.toString());
        console.log(localStorage.getItem('id'));
        this.myAngularxQrCode = localStorage.getItem('id');
        alert('successful');
        this.openModal();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
  }

}
