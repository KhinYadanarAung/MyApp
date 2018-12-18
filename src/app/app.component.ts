import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage} from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TransferPage } from '../pages/transfer/transfer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TransferPage;
  activePage: any; 

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Transfer/Pay Now', component: TransferPage},
      {title: 'Transaction History', component: AboutPage}
    ];

    this.activePage = this.pages[2];

  }

  openPage(page){
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

}
