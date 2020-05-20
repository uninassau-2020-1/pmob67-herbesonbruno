import * as tslib_1 from "tslib";
import { CepPageModule } from './pages/cep/cep.module';
import { FormsModule } from '@angular/forms';
import { CepPage } from './pages/cep/cep.page';
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
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            CepPageModule
        ],
        bootstrap: [AppComponent],
        entryComponents: [
            AppComponent,
            CepPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            ViacepService,
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map