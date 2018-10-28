import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { TabsPage } from '../pages/Supps/tabs/tabs';
import { LoginPage } from '../pages/Auths/login/login';
import { SignUpPage } from '../pages/Auths/Sign Up/sign-up/sign-up';
import { SignUpThanksPage } from '../pages/Auths/Sign Up/sign-up-thanks/sign-up-thanks';
import { LoaderPage } from '../pages/Supps/loader/loader';
import { DashboardPage } from '../pages/MainTabs/dashboard/dashboard';
import { InventoryPage } from '../pages/MainTabs/inventory/inventory';
import { ProfilePage } from '../pages/MainTabs/profile/profile';
import { NotificationsPage } from '../pages/Supps/notifications/notifications';
import { OrdersPage } from '../pages/MainTabs/orders/orders';
import { ScannerPage } from '../pages/MainTabs/scanner/scanner';

export const firebaseCred = {
  apiKey: "AIzaSyDfYGCZchTJHmNBlk4-T4-B24d7qtBs4LQ",
  authDomain: "posters-83a2e.firebaseapp.com",
  databaseURL: "https://posters-83a2e.firebaseio.com",
  projectId: "posters-83a2e",
  storageBucket: "posters-83a2e.appspot.com",
  messagingSenderId: "9709869347"
};
firebase.initializeApp(firebaseCred);


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoaderPage,
    NotificationsPage,
    LoginPage,
    SignUpPage,
    SignUpThanksPage,
    DashboardPage,
    InventoryPage,
    ProfilePage,
    OrdersPage,
    ScannerPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false
    }),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoaderPage,
    NotificationsPage,
    LoginPage,
    SignUpPage,
    SignUpThanksPage,
    DashboardPage,
    InventoryPage,
    ProfilePage,
    OrdersPage,
    ScannerPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
