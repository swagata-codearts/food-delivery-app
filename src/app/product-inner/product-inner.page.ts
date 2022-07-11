import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-inner',
  templateUrl: './product-inner.page.html',
  styleUrls: ['./product-inner.page.scss'],
})
export class ProductInnerPage implements OnInit {
  public currentNumber = 1;
  public productPrice = 65;
  updatedProductPrice = this.productPrice
  constructor() { }

  ngOnInit() {
  }
  
  public increment () {
    this.currentNumber++;
    this.updatedProductPrice = this.currentNumber * this.productPrice
  }
  
  public decrement () {
    if (this.currentNumber > 0) {
      this.currentNumber--;
      this.updatedProductPrice = this.currentNumber * this.productPrice
    } else  {
      this.currentNumber = 0;
    }
  }
  
}
