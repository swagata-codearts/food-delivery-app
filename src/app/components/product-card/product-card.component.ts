import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  items = [
    { id: 0, value: 'Item 0' },
    { id: 1, value: 'Item 1' },
    
  ]
  
  trackItems(index: number, itemObject: any): number {
    return itemObject.id;
  }
}
