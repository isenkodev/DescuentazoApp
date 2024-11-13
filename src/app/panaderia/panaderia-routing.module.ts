import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanaderiaPage } from './panaderia.page';

const routes: Routes = [
  {
    path: '',
    component: PanaderiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanaderiaPageRoutingModule {}
