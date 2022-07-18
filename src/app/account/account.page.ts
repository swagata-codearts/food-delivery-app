import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public router:Router,private storage: Storage) { 
    setTimeout(() => {
      this.storage.create();
      this.storage.get("user_nicename").then(val=>{
        // this.storage.user_name
        // if(val){
        //   this.router.navigateByUrl('home');
        // }
        // else{ 
        //   this.router.navigateByUrl('slider');
        // }
    })
      
    });
  }

  ngOnInit() {
  }

}
