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
  },
  {
    path: 'favpage',
    loadChildren: () => import('./favpage/favpage.module').then( m => m.FavpagePageModule)
  },
  {
    path: 'product-page',
    loadChildren: () => import('./product-page/product-page.module').then( m => m.ProductPagePageModule)
  },
  {
    path: 'lacteos',
    loadChildren: () => import('./lacteos/lacteos.module').then( m => m.LacteosPageModule)
  },
  {
    path: 'verduras',
    loadChildren: () => import('./verduras/verduras.module').then( m => m.VerdurasPageModule)
  },
  {
    path: 'abarrotes',
    loadChildren: () => import('./abarrotes/abarrotes.module').then( m => m.AbarrotesPageModule)
  },
  {
    path: 'frutas',
    loadChildren: () => import('./frutas/frutas.module').then( m => m.FrutasPageModule)
  },
  {
    path: 'fiambreria',
    loadChildren: () => import('./fiambreria/fiambreria.module').then( m => m.FiambreriaPageModule)
  },
  {
    path: 'panaderia',
    loadChildren: () => import('./panaderia/panaderia.module').then( m => m.PanaderiaPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'vistaprod',
    loadChildren: () => import('./vistaprod/vistaprod.module').then( m => m.VistaprodPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }