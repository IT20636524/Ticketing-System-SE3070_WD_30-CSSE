import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Fare } from './fare';
import { FareService } from './fare.service';

@Component({
  selector: 'app-admin-fare-dashboard',
  templateUrl: './admin-fare-dashboard.component.html',
  styleUrls: ['./admin-fare-dashboard.component.css']
})
export class AdminFareDashboardComponent implements OnInit {

  public fares: Fare[]=[];
  searchText ='';

  constructor(private fareService: FareService){}

  ngOnInit() {
    this.getFares();
  }

  public getFares(): void {
    this.fareService.getFare().subscribe(
      (response: Fare[]) => {
        this.fares = response;
        console.log(this.fares);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // public searchFares(key: string): void {
  //   console.log(key);
  //   const results: Fare[] = [];
  //   for (const fare of this.fares) {
  //     if (fare.busNo.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || fare.routeNo.toLowerCase().indexOf(key.toLowerCase()) !== -1    
  //     || fare.fareNo.toLowerCase().indexOf(key.toLowerCase()) !== -1  
  //     || fare.date.toLowerCase().indexOf(key.toLowerCase()) !== -1  
  //     || fare.timePeriod.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || fare.totalFare.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || fare.noOfPassengers.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
  //       results.push(fare);
  //     }
  //   }
  //   this.fares = results;
  //   if (results.length === 0 || !key) {
  //     this.getFares();
  //   }
  // }
}
