import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LampadineComponent } from './lampadine/lampadine.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
  {path:"lampadine", component: LampadineComponent},
  {path: "monitor", component: MonitorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
