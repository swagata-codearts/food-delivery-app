import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://mx2test2.com/restaurant-app';
  consumerKey = 'ck_6e88fb0858ae5c80b620db78fa6a2ad222ddaa7c';
  consumerSecret = 'cs_dec72fc08f0fea22622cf290cb6cf9d106d060d6';
  
 

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get(`${this.url}/wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`);
  }
}
