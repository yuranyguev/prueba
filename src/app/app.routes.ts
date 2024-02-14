import { IntegrantesSemillerosComponent } from './semilleros/integrantes-semilleros/integrantes-semilleros.component';
import { SemilleroComponent } from './semilleros/semillero/semillero.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'semilleros' , component: SemilleroComponent},
  {path:'integrantesSemillero', component: IntegrantesSemillerosComponent},

];
