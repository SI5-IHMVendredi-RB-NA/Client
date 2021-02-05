import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'cashier',
    loadChildren: () => import('./pages/cashier/cashier.module').then( m => m.CashierPageModule)
  },
  {
    path: 'preparator',
    loadChildren: () => import('./pages/preparator/preparator.module').then( m => m.PreparatorPageModule)
  },
  {
    path: 'qr-code-repas',
    loadChildren: () => import('./pages/qr-code-repas/qr-code-repas.module').then( m => m.QrCodeRepasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
