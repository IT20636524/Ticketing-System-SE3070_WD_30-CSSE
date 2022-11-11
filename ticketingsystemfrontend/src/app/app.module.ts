import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFareDashboardComponent } from './admin-fare-dashboard/admin-fare-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { BusScheduleComponent } from './bus-schedule/bus-schedule.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

const appRoute: Routes = [
 
  { path: '', component:  HomeComponent},
  { path: 'admindash', component:  AdminDashboardComponent},
  { path: 'adminfaredash', component:  AdminFareDashboardComponent},
  { path: 'busschedule', component:  BusScheduleComponent},
  { path: 'profile', component:  ProfileComponent},
  { path: 'register', component:  RegisterComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AdminHeaderComponent,
    AdminFareDashboardComponent,
    AdminDashboardComponent,
    ProfileComponent,
    HomeHeaderComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    QRCodeModule,
    MatDialogModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
 
  
})
export class AppModule { }
