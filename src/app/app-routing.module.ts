import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { noAutenticadoGuard } from './guard/no-autenticado.guard';
import { autenticadoGuard } from './guard/autenticado.guard';
const routes: Routes = [
  {
    path: 'home',
    canActivate: [autenticadoGuard], // Protege la ruta
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [noAutenticadoGuard], // Permite el acceso solo a usuarios no autenticados
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }