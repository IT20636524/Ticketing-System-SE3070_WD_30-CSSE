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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './admin-fare-dashboard/search.pipe';
import { ProfileComponent } from './profile/profile.component';
import { BusScheduleComponent } from './bus-schedule/bus-schedule.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { HomeHeaderComponent } from './home-header/home-header.component';

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
    SearchPipe,
    AdminFareDashboardComponent,
    AdminDashboardComponent,
    BusScheduleComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxQRCodeModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
 
  
})
export class AppModule { }
