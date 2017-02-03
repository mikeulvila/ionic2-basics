import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
/**
 * Created by mike.ulvila on 2/2/17.
 */
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit {
  name: string;

  constructor (private navParams: NavParams) {}

  ngOnInit () {
    this.name = this.navParams.get('username'); // or this.navParams.data.username
  }
}
