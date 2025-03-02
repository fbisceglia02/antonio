import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PokemonlistComponent } from './pokemon/pokemonlist/pokemonlist.component';
import { NavbarComponent } from './structures/navbar/navbar.component';
import { LampadineComponent } from './lampadine/lampadine.component';
import { LampadinaComponent } from './lampadina/lampadina.component';
import { FormsModule } from '@angular/forms';
import { MonitorComponent } from './monitor/monitor.component';
import { TelecomandoComponent } from './telecomando/telecomando.component';
import { TelefonoComponent } from './telefono/telefono.component';
import { provideHttpClient } from '@angular/common/http';
import { ProdottiComponent } from './prodotti/prodotti.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    PokemonlistComponent,
    NavbarComponent,
    LampadineComponent,
    LampadinaComponent,
    MonitorComponent,
    TelecomandoComponent,
    TelefonoComponent,
    ProdottiComponent,
    ProductDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule

  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
