import { Component,  } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MenuVerticalComponent } from './componente/menu-vertical/menu-vertical.component';
import { SemilleroComponent } from './semilleros/semillero/semillero.component';
import { IntegrantesSemillerosComponent } from './semilleros/integrantes-semilleros/integrantes-semilleros.component';
import { ProyectosSemilleroComponent } from './semilleros/proyectos-semillero/proyectos-semillero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet,MenuVerticalComponent,RouterLink,
    SemilleroComponent,IntegrantesSemillerosComponent,ProyectosSemilleroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sivri-front';
}
