import { Repas } from './../../models/Repas';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/models/Commande';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-qr-code-repas',
  templateUrl: './qr-code-repas.page.html',
  styleUrls: ['./qr-code-repas.page.scss'],
})
export class QrCodeRepasPage implements OnInit {

  order: Commande;
  orderJSON: string;
  client: Client;
  clientJSON: string;
  orderQR_JSON: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.order = JSON.parse(params['order']);
      this.orderJSON = params['order'];
      this.client = JSON.parse(params['client']);
      this.clientJSON = params['client'];
      this.orderQR_JSON = params['orderQR'];
      console.log(this.orderJSON);
      console.log(this.orderQR_JSON);
    });

    console.log(this.order);
  }

  getOrder()
  {
    JSON.stringify(this.order);
  }

  getClient()
  {
    JSON.stringify(this.client);
  }

}
