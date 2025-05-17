import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HojePageComponent } from './pages/hoje-page/hoje-page.component';
import { AgendarPageComponent } from './pages/agendar-page/agendar-page.component';
import { CancelarPageComponent } from './pages/cancelar-page/cancelar-page.component';
import { HistoricoClientesPageComponent } from './pages/historico-clientes-page/historico-clientes-page.component';
import { AgendaProfessionalPageComponent } from './pages/agenda-professional-page/agenda-professional-page.component';

const routes: Routes = [
  {path: 'hoje', component: HojePageComponent},
  {path: 'agendar', component: AgendarPageComponent},
  {path: 'cancelar', component: CancelarPageComponent},
  {path: 'historico-clientes', component: HistoricoClientesPageComponent},
  {path: 'agenda-professional', component: AgendaProfessionalPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
