import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiambreriaPage } from './fiambreria.page';

const routes: Routes = [
  {
    path: '',
    component: FiambreriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiambreriaPageRoutingModule {}
