import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrCodeRepasPage } from './qr-code-repas.page';

const routes: Routes = [
  {
    path: '',
    component: QrCodeRepasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCodeRepasPageRoutingModule {}
