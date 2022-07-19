import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://mx2test2.com/restaurant-app';
  consumerKey = 'ck_f0764f5201c54cdfb97faf8c05737e651d7ca1cc';
  consumerSecret = 'cs_b1845b5227d68c536a1e796cafab60134496214b';
  
 

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get(`${this.url}/wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`);
  }

  getCategroies(){
    return this.http.get(`${this.url}/wp-json/wc/v3/products/categories?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`);
  }

  getProductsByCats(id){
    let cat_id = id;

    return this.http.get(`${this.url}/wp-json/wc/v3/products?category=${cat_id}&consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`);

  }
}
