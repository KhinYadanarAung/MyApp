import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  username: string = "";
  password: string = "";
  constructor(public navCtrl: NavController) {

  }
  login(){
    console.log("login button clicked")
    console.log(this.username)
    console.log(this.password)
  }

  cancel(){
    console.log("User clicked cancel")
  }
}
