import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductInnerPageRoutingModule } from './product-inner-routing.module';

import { ProductInnerPage } from './product-inner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductInnerPageRoutingModule
  ],
  declarations: [ProductInnerPage]
})
export class ProductInnerPageModule {}
