import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public currentNumber = 1;
  public productPrice = 200;

  productUpdatePrice = this.productPrice;




  constructor() { }

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

}
