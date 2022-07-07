import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public allClicked: boolean = true;
  public lunchClicked: boolean = false;
  public dinnerClicked: boolean = false;
  public fastFoodClicked: boolean = false;
  public dessertClicked: boolean = false;

  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(res=>{
      console.log(res)
    })
  }
  
  
  public onAllClick() {
    this.allClicked = !this.allClicked;
  }
  public onLunchClick() {
    this.allClicked = !this.allClicked;
  }
  public onDinnerClick() {this.dinnerClicked = !this.dinnerClicked;}
  public onFastFoodClick() {this.fastFoodClicked = !this.fastFoodClicked;}
  public onDessertClick() {this.dessertClicked = !this.dessertClicked;}
}
