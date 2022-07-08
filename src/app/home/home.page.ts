import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

const el = document.querySelector('.custom-categories-content ion-item');
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
  
  showCategory = 1;
  categoryClick(index){
    this.showCategory = index;
  }
  
}
