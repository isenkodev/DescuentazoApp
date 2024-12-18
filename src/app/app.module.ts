import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireAuthModule } from '@angular//fire/compat/auth'
import { AngularFireModule } from '@angular//fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';  // <-- IMPORTAR FormsModule AQUÍ


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig),
  FormsModule],
  
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
