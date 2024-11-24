import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HistoriasEcoComponent } from './historias-eco/historias-eco.component';
import { MapaEcoComponent } from './mapa-eco/mapa-eco.component';
import { ReciclagemEcoComponent } from './reciclagem-eco/reciclagem-eco.component';
import { DesafiosEcoComponent } from './desafios-eco/desafios-eco.component';
import { JoaoealixeiraHistoriaComponent } from './historias-eco/joaoealixeira-historia/joaoealixeira-historia.component';
import { ClubedosrecicladoresComponent } from './historias-eco/clubedosrecicladores/clubedosrecicladores.component';
import { MariaeaarvoreComponent } from './historias-eco/mariaeaarvore/mariaeaarvore.component';
import { PedroeomarComponent } from './historias-eco/pedroeomar/pedroeomar.component';
import { AnaeosdesafiosComponent } from './historias-eco/anaeosdesafios/anaeosdesafios.component';
import { LucaseaenergiaComponent } from './historias-eco/lucaseaenergia/lucaseaenergia.component';
import { PontuacaoComponent } from './pontuacao/pontuacao.component';





@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    HomePageComponent,
    HistoriasEcoComponent,
    MapaEcoComponent,
    ReciclagemEcoComponent,
    DesafiosEcoComponent,
    JoaoealixeiraHistoriaComponent,
    ClubedosrecicladoresComponent,
    MariaeaarvoreComponent,
    PedroeomarComponent,
    AnaeosdesafiosComponent,
    LucaseaenergiaComponent,
    PontuacaoComponent,
   
    
    
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
