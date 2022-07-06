import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userForm: FormGroup;
 
  user = this.api.getCurrentUser();
  posts = [];
 
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router:Router
  ) {
  }
 
  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ['', Validators.required]
    });
  }
 

 
  signUp() {
    this.api.signUp(this.userForm.value.username, this.userForm.value.email, this.userForm.value.password).subscribe(
      async res => {
          const toast = await this.toastCtrl.create({
            message: res['message'],
            duration: 3000
          });
          toast.present();
          this.router.navigateByUrl('login');
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
