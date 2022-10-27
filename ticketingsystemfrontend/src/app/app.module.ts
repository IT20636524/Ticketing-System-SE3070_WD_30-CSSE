import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFareDashboardComponent } from './admin-fare-dashboard/admin-fare-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const appRoute: Routes = [
 
  { path: '', component:  HomeComponent},
  { path: 'admindash', component:  AdminDashboardComponent},
  { path: 'adminfaredash', component:  AdminFareDashboardComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AdminHeaderComponent,
    AdminFareDashboardComponent,
    AdminDashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
 
  
})
export class AppModule { }
