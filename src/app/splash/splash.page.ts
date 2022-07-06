import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public router:Router,private storage: Storage) {
    setTimeout(() => {
      this.storage.create();
      this.storage.get("token").then(val=>{
        if(val){
          this.router.navigateByUrl('home');
        }
        else{ 
          this.router.navigateByUrl('slider');
        }
    })
      
    }, 1800);
  }

  ngOnInit() {
   
  }

}
