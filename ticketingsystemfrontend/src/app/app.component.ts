import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'ticketingsystemfrontend';

  admindash: boolean = false;
  adminfaredash: boolean = false;
  register: boolean = false;
 
  ngOnInit():void {
   
  }

  constructor (private zone: NgZone, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/admindash' || event.url ==='/adminfaredash' || event.url ==='/register'  || event.url ==='/' ) {
          this.admindash = true;
          this.adminfaredash = true;
          this.register = true;
        } else {
          this.admindash = false;
          this.adminfaredash = false;
          this.register = false;
        }
      }
    });
  }
}
