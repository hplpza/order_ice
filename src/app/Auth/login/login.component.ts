import { Component, OnInit } from '@angular/core';
import { AuthService } from 'backend/auth-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }



onLogin(form:NgForm)
{
  
  if(form.invalid)
  {
    return;
  }

this.authService.login(form.value.enteredEmail,
  form.value.enteredPassword,
  form.value.enteredUserName)

  console.log(form.value)

}


enteredUserNameError = 'Enter a correctly formatted username';

enteredEmailError = 'Enter a correctly formatted e-mail';

enteredOrderError = 'Enter a correctly formatted order';

enteredPasswordError = 'Enter a correctly formatted password (upper/lower case + number)';





}


