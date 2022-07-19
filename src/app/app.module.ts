import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,
    IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },    
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    Geolocation
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
