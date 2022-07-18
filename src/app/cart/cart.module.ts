import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { TabsComponent } from '../components/tabs/tabs.component';
import { AddressComponent } from '../components/address/address.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
  ],
  declarations: [CartPage,TabsComponent,AddressComponent]
})
export class CartPageModule {}
