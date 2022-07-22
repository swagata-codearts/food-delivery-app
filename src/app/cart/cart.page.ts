import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public currentNumber = 1;
  public productPrice = 200;

  productUpdatePrice = this.productPrice;
  roleMessage: '';




  constructor(public router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  public increment () {
    this.currentNumber++;
    this.productUpdatePrice = this.currentNumber * this.productPrice
  }
  
  public decrement () {
    if(this.currentNumber > 0){
      this.currentNumber--;
      this.productUpdatePrice = this.currentNumber * this.productPrice
    }
    else  {
      this.currentNumber = 0;
    }
    
  }

  redirectCheckout() {
    this.router.navigateByUrl('checkout');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Proceed to checkout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {  }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { this.router.navigateByUrl('checkout') }
        }
      ]
    });

    await alert.present();

    // const { role } = await alert.onDidDismiss();
    // this.roleMessage = `Dismissed with role: ${role}`;
  }
}
