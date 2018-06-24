import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder,FormGroup,Validators}  from '@angular/forms';

import {AccountService} from './account.services';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';


import {routing} from './app.routing';


import {HttpClientModule} from '@angular/common/http';



//@NgModule({
 // declarations: [
   // AppComponent,
    //LoginComponent,
    //ProfileComponent,
    //routing,
    //SignupComponent,
    //WelcomeComponent
  //],
  //imports: [
    ///BrowserModule,
    //FormsModule,
    //HttpClient
  //],
  //providers: [AccountService],
  //bootstrap: [AppComponent]
//})



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})

export class AppModule { }

