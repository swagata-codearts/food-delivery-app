import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { OfferPosterComponent } from '../components/offer-poster/offer-poster.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { TabsComponent } from '../components/tabs/tabs.component';

import { Routes } from '@angular/router';


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
    ProductCardComponent,
    TabsComponent
    

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
  
})


export class HomePageModule {}
