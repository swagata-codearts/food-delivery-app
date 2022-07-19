import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  products:any;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res=>{
      console.log(res)
      this.products = res;
    })
  }
  
}
