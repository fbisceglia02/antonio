import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LampadineComponent } from './lampadine/lampadine.component';
import { MonitorComponent } from './monitor/monitor.component';
import { TelefonoComponent } from './telefono/telefono.component';
import { ProdottiComponent } from './prodotti/prodotti.component';

const routes: Routes = [
  {path:"lampadine", component: LampadineComponent},
  {path: "monitor", component: MonitorComponent},
  {path: "ifone", component: TelefonoComponent},
  {path: "prodotti", component: ProdottiComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
