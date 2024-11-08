import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavpagePage } from './favpage.page';

const routes: Routes = [
  {
    path: '',
    component: FavpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavpagePageRoutingModule {}
