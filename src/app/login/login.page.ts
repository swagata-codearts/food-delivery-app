import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ValidateLogin } from '../Model/ValidateLogin.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  ValidateLogin: any
  
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      loginEmail: ['', [Validators.required, Validators.pattern('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]*\.([a-z]{2,4})$')]],
      loginPassword: ['', [Validators.required, Validators.minLength(1)]]
      
    })
  }
  submitForm() {
    
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      //console.log(this.loginForm.value)
      this.ValidateLogin = new ValidateLogin();
      this.ValidateLogin.itemOne = this.loginForm.value.loginEmail;
      this.ValidateLogin.itemTwo = this.loginForm.value.loginPassword;

      console.log(this.ValidateLogin)

    }
  }

}
