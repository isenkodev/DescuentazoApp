import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanaderiaPageRoutingModule } from './panaderia-routing.module';

import { PanaderiaPage } from './panaderia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanaderiaPageRoutingModule
  ],
  declarations: [PanaderiaPage]
})
export class PanaderiaPageModule {}
