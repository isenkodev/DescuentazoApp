import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { noAutenticadoGuard } from './guard/no-autenticado.guard';
import { autenticadoGuard } from './guard/autenticado.guard';
import { AdminAccessGuard } from './guard/admin-access.guard';
const routes: Routes = [
  {
    path: 'home',
    //canActivate: [autenticadoGuard], // Protege la ruta
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
  {
    path: 'registrar-user',
    canActivate: [noAutenticadoGuard], // Permite el acceso solo a usuarios no autenticados
    loadChildren: () => import('./registrar-user/registrar-user.module').then( m => m.RegistrarUserPageModule)
  },
  {
    path: 'restablecer-pass',
    loadChildren: () => import('./restablecer-pass/restablecer-pass.module').then( m => m.RestablecerPassPageModule)
  },
  {
    path: 'admin',
    canActivate: [AdminAccessGuard] ,
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },  {
    path: 'favpage',
    loadChildren: () => import('./favpage/favpage.module').then( m => m.FavpagePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }