import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCodeRepasPageRoutingModule } from './qr-code-repas-routing.module';

import { QrCodeRepasPage } from './qr-code-repas.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodeRepasPageRoutingModule,
    QRCodeModule
  ],
  declarations: [QrCodeRepasPage]
})
export class QrCodeRepasPageModule {}
