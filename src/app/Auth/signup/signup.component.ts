import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  enteredUserNameError = 'Enter a correctly formatted username';

  enteredEmailError = 'Enter a correctly formatted e-mail';
  
  enteredOrderError = 'Enter a correctly formatted order';
  
  enteredPasswordError = 'Enter a correctly formatted password (upper/lower case + number)';
                        
  
  
  isLoading = 'false';

  onSignUp(form: NgForm)
  {
    console.log(form.value)
  }



}
