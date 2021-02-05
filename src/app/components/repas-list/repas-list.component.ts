import { Repas } from './../../models/Repas';
import { RepasService } from './../../services/repas/repas.service';
import { Component, Input, OnInit } from '@angular/core';
import { AnimationController, MenuController, NavController, ToastController } from '@ionic/angular';
import {HttpClient} from "@angular/common/http";
import { NavigationExtras } from '@angular/router';
import { Commande } from 'src/app/models/Commande';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-repas-list',
  templateUrl: './repas-list.component.html',
  styleUrls: ['./repas-list.component.scss'],
})
export class RepasListComponent implements OnInit {

  public showStyle: boolean = false;
  selectedRepas: Repas;
  color1: string;
  textColor: string;
  @Input() client: Client;


  constructor(
    private toastController: ToastController,
    private animationCtrl: AnimationController,
    private navCtrl: NavController,
    private menu: MenuController,
    private http: HttpClient,
    private repasService: RepasService) {}

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
    order.repas = this.selectedRepas;
    order.client = this.client;
    this.client.commandes.push(order);
    console.log(this.selectedRepas);
    this.http.post<Repas>('http://localhost:9428/api/repas', this.selectedRepas).subscribe(data => {
      console.log(data);
    });
    this.presentToast();
    console.log(this.selectedRepas);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        order: JSON.stringify(order)
      }
  };
  this.navCtrl.navigateForward(['qr-code-repas'], navigationExtras);
  }

  selectRepas(repas: Repas)
  {
    this.animationCtrl.create()
    .addElement(document.querySelector('#repas-' + repas.id))
    .duration(500)
    .keyframes([
      { offset: 0, background: 'var(--background)'},
      { offset: 0.5, background: '' },
      { offset: 1, background: '#2dd36f' }
    ]).play();

    this.animationCtrl.create()
    .addElement(document.querySelector('#subtitle-' + repas.id ))
    .addElement(document.querySelector('#title-' + repas.id))
    .duration(500)
    .keyframes([
      { offset: 0, color: 'var(--background)'},
      { offset: 0.5, color: '' },
      { offset: 1, color: 'white' }
    ]).play();
  }

  getRepas(): Repas[]
  {
    return this.repasService.getRepas();
  }

  onSelect(repas: Repas): void {
    this.showStyle = true;
    this.selectedRepas = repas;
}

getStyle(repas: Repas): void {
  if (repas === this.selectedRepas) {
    this.selectRepas(repas);
  } else {
    this.animationCtrl.create()
    .addElement(document.querySelector('#repas-' + repas.id))
    .duration(500)
    .keyframes([
      { offset: 0, background: '#2dd36f'},
      { offset: 0.5, background: '' },
      { offset: 1, background: 'var(--background)' }
    ]).play();

    this.animationCtrl.create()
    .addElement(document.querySelector('#repas-' + repas.id ))
    .addElement(document.querySelector('#repas-' + repas.id))
    .duration(500)
    .keyframes([
      { offset: 0, color: 'var(--background)'},
      { offset: 0.5, color: '' },
      { offset: 1, color: 'red' }
    ]).play();
  }
}

openFirst(): void {
  this.menu.enable(true, 'first');
  this.menu.open('first');
}

}
