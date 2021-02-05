import { Component, OnInit } from '@angular/core';
import CLIENT from 'src/app/mocks/Client';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  client: Client;

  constructor() { }

  ngOnInit() {
    this.client = CLIENT;
  }

}
