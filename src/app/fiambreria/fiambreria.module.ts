import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiambreriaPageRoutingModule } from './fiambreria-routing.module';

import { FiambreriaPage } from './fiambreria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiambreriaPageRoutingModule
  ],
  declarations: [FiambreriaPage]
})
export class FiambreriaPageModule {}
