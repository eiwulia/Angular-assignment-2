import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrafikComponent } from './trafik/trafik.component';
import { ListaComponent } from './lista/lista.component';
import { TravelComponent } from './travel/travel.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'traffic', component: TrafikComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'lista', component: ListaComponent },
  { path: '', component: MainComponent },
	{ path: '404', component: MainComponent },
  { path: '**', redirectTo: '404' }
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
