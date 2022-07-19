import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

const el = document.querySelector('.custom-categories-content ion-item');
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  products: any;
  cats:any;
  productsBycat:any;


  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(res=>{
      console.log(res)
      this.products = res;
    })

    this.productService.getCategroies().subscribe(res=>{
      console.log(res)
      this.cats = res;
    })    
  }
  
  showCategory = 1;
  categoryClick(index){
    // this.showCategory = index;
    if(index==1){
      this.showCategory = 1;
    }
    else{

      this.productService.getProductsByCats(index).subscribe(res=>{
        console.log(res)
        this.productsBycat = res;
        this.showCategory = 2;
      })  

    }
    

  }
  
}
