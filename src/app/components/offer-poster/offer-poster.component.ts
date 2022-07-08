import { Component, OnInit } from '@angular/core';
import { OfferBannerService } from 'src/app/services/offer-banner.service';

@Component({
  selector: 'app-offer-poster',
  templateUrl: './offer-poster.component.html',
  styleUrls: ['./offer-poster.component.scss'],
})
export class OfferPosterComponent implements OnInit {
  items:any;

  constructor(private offers:OfferBannerService) { }

  ngOnInit() {
    this.offers.getOfferBanners().subscribe(res=>{
      this.items = res; 
      
      console.log(this.items)
    })
  }

}
