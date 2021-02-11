import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentification',
    pathMatch: 'full'
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'qr-code-repas',
    loadChildren: () => import('./pages/qr-code-repas/qr-code-repas.module').then( m => m.QrCodeRepasPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./pages/authentification/authentification.module').then( m => m.AuthentificationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
