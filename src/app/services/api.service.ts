import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';

const JWT_KEY = 'myjwtstoragekey';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private user = new BehaviorSubject(null);
  
  constructor(private http: HttpClient, private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.storage.get(JWT_KEY).then(data => {
        console.log('from storage: ', data);
        if(data)
        {
          this.user.next(data);
        }
      })
    })
  }
  
  signIn(username, password)
  {
    return this.http.post(`${environment.apiUrl}/jwt-auth/v1/token`, { username, password }).pipe(
      switchMap(data => {
        console.log('data: ', data);
        return from (this.storage.set(JWT_KEY, data));
      }),
      tap(data => {
        this.user.next(data);
      })
    );
  }
}
