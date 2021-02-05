import { Repas } from './../../models/Repas';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/Commande';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.page.html',
  styleUrls: ['./cashier.page.scss'],
})
export class CashierPage implements OnInit {
  data: any;
  order: Commande;

  constructor(private barcodeScanner: BarcodeScanner, private toast: ToastController) { }

  ngOnInit() {
  }

  scan() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
      console.log(this.data);
      this.order = JSON.parse(barcodeData.text);
      console.log(this.order);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  getRepasFromOrder()
  {
    return this.order.repas.nom + ', Prix : ' + this.order.repas.prix + '€';
  }

  getClientFromOrder() 
  {
    return  'Client : ' + this.order.client.nom + '\n' + ' Balance : ' + this.order.client.balance;
  }

  confirm()
  {
    this.order.client.balance -= this.order.repas.prix;
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Commande payée',
      duration: 7000,
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

}
