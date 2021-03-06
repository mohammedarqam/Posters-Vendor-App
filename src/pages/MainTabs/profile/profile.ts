import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, PopoverController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfileDetailsPage } from '../../Profile/profile-details/profile-details';
import { ContactPage } from '../../Profile/contact/contact';
import { FaqsPage } from '../../Profile/faqs/faqs';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  loading = this.loadingCtrl.create({
    spinner: 'crescent',
    showBackdrop : false,	
  });


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db : AngularFireDatabase,    
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    ) {
    this.getVendor();
  }

  signOutConfirm(){
    let alert = this.alertCtrl.create({
      title: 'Confirm logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.signOut();
          }
        }
      ]
    });
    alert.present();
  }
  
    signOut(){
      this.loading.present();
      firebase.auth().signOut().then(()=>{
        this.loading.dismiss();
      });
    }
 
    
    StoreName: string;
    OwnerName: string;
    PhoneNumber: string;
    StoreCategory: string;
    StoreLocation: string;
    email: string;
    pass: string;
    created: string;
    status : string;
  
  
  
  
  
  
    getVendor(){
      let loading = this.loadingCtrl.create({
        content: 'Logging In...'
      });
      loading.present();
  
      this.db.object(`Seller Data/Sellers/${firebase.auth().currentUser.uid}`).snapshotChanges().subscribe(snap=>{
        var temp : any = snap.payload.val();
        this.StoreName = temp.StoreName;
        this.OwnerName = temp.OwnerName;
        this.PhoneNumber = temp.PhoneNumber;
        this.StoreCategory = temp.StoreCategory;
        this.StoreLocation = temp.StoreLocation;
        this.email = temp.Email;
        this.pass = temp.Pass;
        this.created = temp.TimeStamp;
        this.status = temp.Status;
      })
    }
  

    gtDetails(){this.navCtrl.push(ProfileDetailsPage)}
    gtContact(){this.navCtrl.push(ContactPage)}
    gtFaqs(){this.navCtrl.push(FaqsPage)}

}
