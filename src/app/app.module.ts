import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TransferPage } from '../pages/transfer/transfer';
import { TransferOtherAccountPage } from '../pages/transferotheraccount/transferotheraccount';
import { TransferCreditCardPage } from '../pages/transfercreditcard/transfercreditcard';
import { PayNowPage } from '../pages/paynow/paynow';
import { TransferOverseaPage } from '../pages/transferoversea/transferoversea';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TransferPage,
    TransferOtherAccountPage,
    TransferCreditCardPage,
    PayNowPage,
    TransferOverseaPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TransferPage,
    TransferOtherAccountPage,
    TransferCreditCardPage,
    PayNowPage,
    TransferOverseaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
