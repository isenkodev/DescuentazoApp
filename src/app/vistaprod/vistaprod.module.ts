import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaprodPageRoutingModule } from './vistaprod-routing.module';

import { VistaprodPage } from './vistaprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaprodPageRoutingModule
  ],
  declarations: [VistaprodPage]
})
export class VistaprodPageModule {}
