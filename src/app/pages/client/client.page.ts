import { Component, OnInit } from '@angular/core';
import CLIENT from 'src/app/mocks/Client';
import { Client } from 'src/app/models/Client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  client: Client;
  username: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
    this.username = params.username;
  });
  }

  ngOnInit() {

    // this.client = CLIENT;
  }

}
