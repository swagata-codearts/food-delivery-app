import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform:Platform,
    public router: Router,
    private storage: Storage
  ) 
  {
    this.initializeApp();
  }

  initializeApp(){
    this.storage.create()
    //this.storage.clear()
    this.platform.ready().then(()=>{
      
      this.router.navigateByUrl('splash');
    })
  }

}
