import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Navbar } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { TransferOtherAccountPage } from '../transferotheraccount/transferotheraccount';
import { TransferCreditCardPage } from '../transfercreditcard/transfercreditcard';
import { PayNowPage } from '../paynow/paynow';
import { TransferOverseaPage } from '../transferoversea/transferoversea';

@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html'
})
export class TransferPage {

  constructor(public navCtrl: NavController) {

  }
  
  gotootheraccount(){
    this.navCtrl.push(TransferOtherAccountPage);
  }

  gotocreditcard(){
    this.navCtrl.push(TransferCreditCardPage);
  }

  gotopaynow(){
    this.navCtrl.push(PayNowPage);
  }

  gotooversea(){
    this.navCtrl.push(TransferOverseaPage);
  }

}
