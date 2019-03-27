import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrafikComponent } from './trafik/trafik.component';
import { TravelComponent } from './travel/travel.component';
import { TravelDestinationComponent } from './travel-destination/travel-destination.component';
import { ListaComponent } from './lista/lista.component';
import { ListaService } from './lista.service';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    TrafikComponent,
    TravelComponent,
    TravelDestinationComponent,
    ListaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [ListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
