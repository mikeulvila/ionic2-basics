import { Component } from '@angular/core';
import { UsersPage } from '../users/users'
import {NavController} from "ionic-angular";
import {ShopPage} from "../shop/shop";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  usersPage = UsersPage;

  constructor (public navCtrl: NavController) {}

  onGoToShop () {
    this.navCtrl.push(ShopPage);
  }
}
