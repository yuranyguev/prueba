import { Component,  } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuVerticalComponent } from './componente/menu-vertical/menu-vertical.component';
import { SemilleroComponent } from './semilleros/semillero/semillero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MenuVerticalComponent,
    SemilleroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sivri-front';
}
