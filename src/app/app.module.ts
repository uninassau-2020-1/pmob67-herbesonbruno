import { MapaPageModule } from './pages/mapa/mapa.module';
import { InicioPage } from './pages/inicio/inicio.page';
import { InicioPageModule } from './pages/inicio/inicio.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//incluído para viacep
import { HttpClientModule } from '@angular/common/http'; 
import { ViacepService } from './servicos/viacep.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapaPage } from './pages/mapa/mapa.page';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MapaPageModule    
  ],

  bootstrap: [AppComponent],

  entryComponents: [
    AppComponent,
    MapaPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ViacepService,
    Geolocation
        
  ],
 
})
export class AppModule {}
