import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCountComponent } from './user-count/user-count.component';
import { OrderCountComponent } from './order-count/order-count.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


const route: Routes = [
  {
    path: '',
    component: WelcomeComponent
    
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserCountComponent,
    OrderCountComponent,
    SpinnerComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
