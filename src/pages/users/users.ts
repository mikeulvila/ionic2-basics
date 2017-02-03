import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from "./user/user";

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  constructor (private navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {username: name})
  }

}
