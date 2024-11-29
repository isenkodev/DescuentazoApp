import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaprodPage } from './vistaprod.page';

const routes: Routes = [
  {
    path: '',
    component: VistaprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaprodPageRoutingModule {}
