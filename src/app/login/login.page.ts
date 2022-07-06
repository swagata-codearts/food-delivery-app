import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userForm: FormGroup;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private storage: Storage,
    private router:Router
    ) { }

  ngOnInit() {
    this.storage.create();
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ['', Validators.required]
    });
  }

  login() {
    this.api.signIn(this.userForm.value.username, this.userForm.value.password).subscribe(

      async res => {
        const toast = await this.toastController.create({
          message: 'Logged in successfully!',
          duration: 2000
        });
        toast.present();
        this.storage.set("token",res.token);
        this.router.navigateByUrl('home');

      },
      err => {
        this.showError(err);
      }
    );
  }
 
  

  async openPwReset() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot password?',
      message: 'Enter your email or username to retrieve a new password',
      inputs: [
        {
          type: 'text',
          name: 'usernameOrEmail'
        }
      ],
      buttons: [
        {
          role: 'cancel',
          text: 'Back'
        },
        {
          text: 'Reset Password',
          handler: (data) => {
            this.resetPw(data['usernameOrEmail']);
          }
        }
      ]
    });
  
    await alert.present();
  }
 
  resetPw(usernameOrEmail) {
    this.api.resetPassword(usernameOrEmail).subscribe(
      async res => {
        const toast = await this.toastController.create({
          message: res['message'],
          duration: 2000
        });
        toast.present();
      },
      err => {
        this.showError(err);
      }
    );
  }
 
  

 
  async showError(err) {
    
    const alert = await this.alertCtrl.create({
      header: err.error.code,
      subHeader: err.error.data.status,
      message: err.error.message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
