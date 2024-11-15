import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HistoriasEcoComponent } from './historias-eco/historias-eco.component';
import { MapaEcoComponent } from './mapa-eco/mapa-eco.component';
import { ReciclagemEcoComponent } from './reciclagem-eco/reciclagem-eco.component';
import { DesafiosEcoComponent } from './desafios-eco/desafios-eco.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    HistoriasEcoComponent,
    MapaEcoComponent,
    ReciclagemEcoComponent,
    DesafiosEcoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
