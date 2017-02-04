import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {
  productData: { name: string, qty: number };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productData = this.navParams.data;
  }

  onConfirmPurchase () {
    this.navCtrl.popToRoot();
  }


}
