import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavpagePageRoutingModule } from './favpage-routing.module';

import { FavpagePage } from './favpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavpagePageRoutingModule
  ],
  declarations: [FavpagePage]
})
export class FavpagePageModule {}
