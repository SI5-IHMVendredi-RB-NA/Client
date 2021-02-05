import { RepasComponent } from './../../components/repas/repas.component';
import { RepasListComponent } from './../../components/repas-list/repas-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ClientPage, RepasListComponent, RepasComponent]
})
export class ClientPageModule {}
