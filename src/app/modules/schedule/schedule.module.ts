import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { HojePageComponent } from './pages/hoje-page/hoje-page.component';
import { AgendarPageComponent } from './pages/agendar-page/agendar-page.component';
import { CancelarPageComponent } from './pages/cancelar-page/cancelar-page.component';
import { HistoricoClientesPageComponent } from './pages/historico-clientes-page/historico-clientes-page.component';
import { AgendaProfessionalPageComponent } from './pages/agenda-professional-page/agenda-professional-page.component';


@NgModule({
  declarations: [
    HojePageComponent,
    AgendarPageComponent,
    CancelarPageComponent,
    HistoricoClientesPageComponent,
    AgendaProfessionalPageComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
