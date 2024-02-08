import { Component , OnInit} from '@angular/core';
import { ServicioSemilleroService } from '../../servicio/semillero/servicio-semillero.service';
import { RespuestaModelo } from '../../modelo/respuesta-modelo';
import { SemilleroModelo } from '../../modelo/semillero-modelo';
import { BarraHorizontalComponent } from '../../componente/barra-horizontal/barra-horizontal.component';
import { MenuVerticalComponent } from '../../componente/menu-vertical/menu-vertical.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-semillero',
  standalone: true,
  imports: [
    BarraHorizontalComponent,
    MenuVerticalComponent,
    NgFor,
    FormsModule
  ],
  templateUrl: './semillero.component.html',
  styleUrl: './semillero.component.css'
})
export class SemilleroComponent {

  respuestaModelo: RespuestaModelo=new RespuestaModelo;
  semilleroModelo:SemilleroModelo[]=[];
  numeroPaginas:number=0;
  paginaActual:number=0;
  paginas:number[]=[1,2,5];
  opcionSeleccionada:number=2;

  constructor( private semilleroSevicio:ServicioSemilleroService){

  }

  obtenerRespuesta(){
    console.log(this.opcionSeleccionada)
    this.semilleroSevicio.obtenerSemilleros(this.paginaActual,this.opcionSeleccionada).subscribe((response)=>{
    this.respuestaModelo=response as RespuestaModelo
    this.semilleroModelo=response.data.content as SemilleroModelo[]
    this.numeroPaginas=response.data.totalPages
    this.paginaActual=response.data.pageable.pageNumber+1
    })
  }

  onSelectChange(event: any) {
    this.opcionSeleccionada = event.target.value;
    console.log(this.opcionSeleccionada);
    console.log(this.paginaActual)
    this.obtenerRespuesta();
  }

  ngOnInit() {
    this.obtenerRespuesta();
    console.log(this.respuestaModelo)
  }

}
