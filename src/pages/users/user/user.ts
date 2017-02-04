import {Component, OnInit} from "@angular/core";
import {NavParams, NavController} from "ionic-angular";
/**
 * Created by mike.ulvila on 2/2/17.
 */
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit {
  name: string;

  constructor (private navParams: NavParams,
               private navCtrl: NavController) {}

  ngOnInit () {
    this.name = this.navParams.get('username'); // or this.navParams.data.username
  }

  onGoBack () {
    //this.navCtrl.pop(); //pops off one page to go back one page
    this.navCtrl.popToRoot(); //pops off all pages to return to root page
  }
}
