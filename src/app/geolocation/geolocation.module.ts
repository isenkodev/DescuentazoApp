import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeolocationPageRoutingModule } from './geolocation-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GeolocationPage } from './geolocation.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocationPageRoutingModule,
    HttpClientModule
  
  ],
  declarations: [GeolocationPage]
})
export class GeolocationPageModule {}
