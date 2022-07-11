import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { OfferPosterComponent } from '../components/offer-poster/offer-poster.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    OfferPosterComponent,
    ProductCardComponent
    

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
  
})
export class HomePageModule {}
