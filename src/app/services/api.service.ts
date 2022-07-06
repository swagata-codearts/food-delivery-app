<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';

const JWT_KEY = 'myjwtstoragekey';
=======
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { map, switchMap, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
 
const JWT_KEY = 'myjwtstoragekey';
 
>>>>>>> dfcdde0065b4a1e7f74499ae5be3b1a26bdd1033
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private user = new BehaviorSubject(null);
<<<<<<< HEAD
  
  constructor(private http: HttpClient, private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.storage.get(JWT_KEY).then(data => {
        console.log('from storage: ', data);
        if(data)
        {
=======
 
  constructor(private http: HttpClient, private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.storage.get(JWT_KEY).then(data => {
        if (data) {
>>>>>>> dfcdde0065b4a1e7f74499ae5be3b1a26bdd1033
          this.user.next(data);
        }
      })
    })
  }
<<<<<<< HEAD
  
  signIn(username, password)
  {
    return this.http.post(`${environment.apiUrl}/jwt-auth/v1/token`, { username, password }).pipe(
      switchMap(data => {
        console.log('data: ', data);
        return from (this.storage.set(JWT_KEY, data));
=======
 
  signIn(username, password) {
    return this.http.post(`${environment.apiUrl}/jwt-auth/v1/token`, { username, password }).pipe(
      switchMap(data => {
        return from(this.storage.set(JWT_KEY, data));
>>>>>>> dfcdde0065b4a1e7f74499ae5be3b1a26bdd1033
      }),
      tap(data => {
        this.user.next(data);
      })
    );
  }
<<<<<<< HEAD
}
=======
 
  signUp(username, email, password) {
    return this.http.post(`${environment.apiUrl}/wp/v2/users/register`, { username, email, password });
  }
 
  resetPassword(usernameOrEmail) {
    return this.http.post(`${environment.apiUrl}/wp/v2/users/lostpassword`, { user_login: usernameOrEmail });
  }
 
  getPrivatePosts() {
    return this.http.get<any[]>(`${environment.apiUrl}/wp/v2/posts?_embed&status=private`).pipe(
      map(data => {
        for (let post of data) {
          if (post['_embedded']['wp:featuredmedia']) {
            post.media_url =
              post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
          }
        }
        return data;
      })
    );
  }
 
  getCurrentUser() {
    return this.user.asObservable();
  }
 
  getUserValue() {
    return this.user.getValue();
  }
 
  logout() {
    this.storage.remove(JWT_KEY).then(() => {
      this.user.next(null);
    });
  }
}
>>>>>>> dfcdde0065b4a1e7f74499ae5be3b1a26bdd1033
