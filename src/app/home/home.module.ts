import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { OfferPosterComponent } from '../components/offer-poster/offer-poster.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { AllMenuComponent } from '../components/categories/all-menu/all-menu.component';
import { LunchMenuComponent } from '../components/categories/lunch-menu/lunch-menu.component';
import { DinnerMenuComponent } from '../components/categories/dinner-menu/dinner-menu.component';
import { FastFoodMenuComponent } from '../components/categories/fast-food-menu/fast-food-menu.component';
import { DessertMenuComponent } from '../components/categories/dessert-menu/dessert-menu.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    OfferPosterComponent,
    CategoriesComponent,
    AllMenuComponent,
    LunchMenuComponent,
    DinnerMenuComponent,
    FastFoodMenuComponent,
    DessertMenuComponent
    

  ]
})
export class HomePageModule {}
