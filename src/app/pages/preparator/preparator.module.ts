import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreparatorPageRoutingModule } from './preparator-routing.module';

import { PreparatorPage } from './preparator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreparatorPageRoutingModule
  ],
  declarations: [PreparatorPage]
})
export class PreparatorPageModule {}
