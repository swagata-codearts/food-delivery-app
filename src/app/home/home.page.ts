import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private productService:ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe(res=>{
      console.log(res)
    })
  }

}
