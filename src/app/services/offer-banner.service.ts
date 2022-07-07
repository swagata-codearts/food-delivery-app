import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferBannerService {
  url = 'http://mx2test2.com/restaurant-app/wp-json/resturent/v1/offer-banner';

  constructor(private http:HttpClient) { }

getOfferBanners(){
  return this.http.get(`${this.url}`);
}

}
