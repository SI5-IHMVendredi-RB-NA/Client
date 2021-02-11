import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  userName: string;
  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToOrderPage() {
    let value: NavigationExtras;

    let navigationExtras: NavigationExtras = {
      queryParams: {
        username: this.userName
      }
  };
  this.navCtrl.navigateForward(['client'], navigationExtras);
  }

}
