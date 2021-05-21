import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';




import { AppComponent } from './app.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from  './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthInterceptor } from 'backend/auth-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    OrderCreateComponent,
    OrderPlacedComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
