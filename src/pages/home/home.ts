import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConnectivityService } from '../../providers/connectivity-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public online: boolean;
  public offline: boolean;

  constructor(public navCtrl: NavController, public connectivityService: ConnectivityService) {

    this.online = this.connectivityService.isOnline();
    this.offline = this.connectivityService.isOffline();

  }

}
