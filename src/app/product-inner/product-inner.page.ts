import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-inner',
  templateUrl: './product-inner.page.html',
  styleUrls: ['./product-inner.page.scss'],
})
export class ProductInnerPage implements OnInit {
  public currentNumber = 1;
  public productPrice = 65;
  updatedProductPrice = this.productPrice

  cats:any;
  products: any;
  productByCats: any;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res=>{
      console.log(res)
      this.products = res;
    })
    this.productService.getCategroies().subscribe(res=>{
      console.log(res)
      this.cats = res;
    })
    this.productService.getProductsByCats(id).subscribe(res=>{
      console.log(res)
      this.productByCats = res;
    })
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

function id(id: any) {
  throw new Error('Function not implemented.');
}
// function id(id: any) {
//   throw new Error('Function not implemented.');
// }

