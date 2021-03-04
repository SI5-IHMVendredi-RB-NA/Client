import { ServerSentEventService } from './../../services/server-sent-event.service';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Commande } from './../../models/Commande';
import { HttpClient } from '@angular/common/http';
import { Dessert } from './../../models/Dessert';
import { Sandwich } from './../../models/Sandwich';
import { Repas } from './../../models/Repas';
import { RepasService } from './../../services/repas/repas.service';
import { Component, Input, OnInit } from '@angular/core';
import { AnimationController, NavController, ToastController, Platform } from '@ionic/angular';
import ENTREE from 'src/app/mocks/Entree';
import { Entree } from 'src/app/models/Entree';
import { Boisson } from 'src/app/models/Boisson';
import SANDWICH from 'src/app/mocks/Sandwich';
import DESSERT from 'src/app/mocks/Dessert';
import BOISSON from 'src/app/mocks/Boisson';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import CLIENT from 'src/app/mocks/Client';
import { Status } from 'src/app/models/Status';
import REPAS from 'src/app/mocks/Repas';

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
  counter: number = 0;

  clientName: string;
  id: number;

  constructor(
    private toastController: ToastController,
    private animationCtrl: AnimationController,
    private navCtrl: NavController,
    private http: HttpClient,
    private repasService: RepasService,
    private plt: Platform,
    private sseEvent: ServerSentEventService,
    private localNotification: LocalNotifications,
    private activatedRoute: ActivatedRoute) { }

   ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.clientName = params['username'];
    });
    this.id = Date.now();
    const name = this.clientName;
    this.sseEvent
    .getServerSentEvent('http://10.189.174.180:9428/api/user/stream/' + this.id + '/' + name)
    .subscribe(data => {
      console.log('commande ready');
      console.log(data.data);
      //const order = JSON.parse(data.data);
      //this.orders.push(order.order);
      this.scheduleNotification('Votre commande est prête à être retirée !');
    });
  }

  scheduleNotification(message: string) {
    this.localNotification.schedule({
      id: 1,
      title: 'Etat de votre commande',
      text: message,
      data: {page: 'myPage'},
      trigger: {in: 5, unit: ELocalNotificationTriggerUnit.SECOND}
    })
  }

  getAll() {
    this.localNotification.getAll().then(res => {

    });
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
    this.counter += 1;
    let order: Commande = new Commande();
    order.id = 102 + this.counter;
    order.status = Status.PROGRESS;
    order.repas = this.repasService.getRepas();
    order.idClient = this.id;
    order.client = CLIENT;
    order.client.nom = this.clientName;
    console.log(this.repasService.getRepas());
    /*this.http.post<Commande>('http://localhost:9428/api/order', this.repasService.getRepas()).subscribe(data => {
      console.log(data);
    });

     */
    this.http.post<Commande>('http://10.189.174.180:9428/api/order', order).subscribe(data => {
      console.log(data);
    });
    this.presentToast();
    let orderQR = {
      id : order.id,
      client: order.client,
      idClient: order.idClient,
      status: order.status
    };
    console.log(this.repasService.getRepas());
    let navigationExtras: NavigationExtras = {
      queryParams: {
        order: JSON.stringify(order),
        client:  JSON.stringify(order.client),
        orderQR: JSON.stringify(orderQR)
      }
  };
  this.scheduleNotification('Votre commande a été validé avec succès !');
  this.navCtrl.navigateForward(['qr-code-repas'], navigationExtras);
  }

  orderBulkMock() {
    let orderForQrPage: Commande;
    REPAS.forEach(repas => {
      this.counter += 1;
      let order: Commande = new Commande();
      order.id = 102 + this.counter;
      order.status = Status.PROGRESS;
      order.repas = repas;
      order.idClient = this.id;
      order.client = CLIENT;
      order.client.nom = this.clientName;
      orderForQrPage = order;
      /*this.http.post<Commande>('http://localhost:9428/api/order', this.repasService.getRepas()).subscribe(data => {
        console.log(data);
      });
  
       */
      this.http.post<Commande>('http://10.189.174.180:9428/api/order', order).subscribe(data => {
        console.log(data);
      });
    });

    this.presentToast();
    let orderQR = {
      id : orderForQrPage.id,
      client: orderForQrPage.client,
      idClient: orderForQrPage.idClient,
      status: orderForQrPage.status
    };
    let navigationExtras: NavigationExtras = {
      
      queryParams: {
        order: JSON.stringify(orderForQrPage),
        client:  JSON.stringify(orderForQrPage.client),
        orderQR: JSON.stringify(orderQR)
      }
  };
  this.scheduleNotification('Votre commande a été validé avec succès !');
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
