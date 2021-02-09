import { Commande } from './../../models/Commande';
import { HttpClient } from '@angular/common/http';
import { Dessert } from './../../models/Dessert';
import { Sandwich } from './../../models/Sandwich';
import { Repas } from './../../models/Repas';
import { RepasService } from './../../services/repas/repas.service';
import { Component, Input, OnInit } from '@angular/core';
import { AnimationController, NavController, ToastController } from '@ionic/angular';
import ENTREE from 'src/app/mocks/Entree';
import { Entree } from 'src/app/models/Entree';
import { Boisson } from 'src/app/models/Boisson';
import SANDWICH from 'src/app/mocks/Sandwich';
import DESSERT from 'src/app/mocks/Dessert';
import BOISSON from 'src/app/mocks/Boisson';
import { NavigationExtras } from '@angular/router';
import CLIENT from 'src/app/mocks/Client';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.scss'],
})
export class RepasComponent implements OnInit {

  selectedEntree: Entree;
  selectedSandwich: Sandwich;
  selectedDessert: Dessert;
  selectedBoisson: Boisson;

  constructor(    
    private toastController: ToastController,
    private animationCtrl: AnimationController,
    private navCtrl: NavController,
    private http: HttpClient,
    private repasService: RepasService) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Commande validée avec succès',
      duration: 10000,
      buttons:
      [
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });
    toast.present();
  }

  order(): void
  {
    let order: Commande = new Commande();
    order.id = 10;
    order.repas = this.repasService.getRepas();
    order.client = CLIENT;
    console.log(this.repasService.getRepas());
    this.http.post<Repas>('http://localhost:9428/api/repas', this.repasService.getRepas()).subscribe(data => {
      console.log(data);
    });
    this.presentToast();
    console.log(this.repasService.getRepas());
    let navigationExtras: NavigationExtras = {
      queryParams: {
        order: JSON.stringify(order)
      }
  };
  this.navCtrl.navigateForward(['qr-code-repas'], navigationExtras);
  }

  getRepas(): Repas
  {
    return this.repasService.getRepas();
  }

  compareWith(o1, o2) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  getEntrees(): Entree[]
  {
    return ENTREE;
  }

  getSandwichs(): Sandwich[]
  {
    return SANDWICH;
  }

  getDesserts(): Dessert[]
  {
    return DESSERT;
  }

  getBoissons(): Boisson[]
  {
    return BOISSON;
  }

  setEntree()
  {
    this.repasService.setEntree(this.selectedEntree);
  }
  
  setSandwich()
  {
    this.repasService.setSandwich(this.selectedSandwich);
  }

  setDessert()
  {
    this.repasService.setDessert(this.selectedDessert);
  }

  setBoisson()
  {
    this.repasService.setBoisson(this.selectedBoisson);
  }
}
