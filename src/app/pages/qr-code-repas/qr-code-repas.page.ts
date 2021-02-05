import { Repas } from './../../models/Repas';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/models/Commande';

@Component({
  selector: 'app-qr-code-repas',
  templateUrl: './qr-code-repas.page.html',
  styleUrls: ['./qr-code-repas.page.scss'],
})
export class QrCodeRepasPage implements OnInit {

  order: Commande;
  orderJSON: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.order = JSON.parse(params['order']);
      this.orderJSON = params['order'];
    });

    console.log(this.order);
  }

  getOrder()
  {
    JSON.stringify(this.order);
  }

}
