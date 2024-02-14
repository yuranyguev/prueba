import { Component , OnInit} from '@angular/core';
import { SemilleroService } from '../../servicio/semillero/semillero.service';
import { RespuestaModelo } from '../../modelo/respuesta-modelo';
import { SemilleroModelo } from '../../modelo/semillero/semillero-modelo';
import { BarraHorizontalComponent } from '../../componente/barra-horizontal/barra-horizontal.component';
import { MenuVerticalComponent } from '../../componente/menu-vertical/menu-vertical.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InformacionSemilleroComponent } from '../informacion-semillero/informacion-semillero.component';


@Component({
  selector: 'app-semillero',
  standalone: true,
  imports: [
    BarraHorizontalComponent,
    MenuVerticalComponent,
    NgFor,
    FormsModule,
    InformacionSemilleroComponent
  ],
  templateUrl: './semillero.component.html',
  styleUrl: './semillero.component.css'
})
export class SemilleroComponent implements OnInit {

  respuestaModelo: RespuestaModelo=new RespuestaModelo;
  semilleroModelo:SemilleroModelo[]=[];
  numeroPaginas:number=0;
  paginaActual:number=0;
  paginas:number[]=[1,2,5];
  opcionSeleccionada:number=2;
  voffset:number=0;

  constructor( private semilleroSevicio:SemilleroService){
  }

  obtenerRespuesta(){
    console.log(this.opcionSeleccionada)
    this.semilleroSevicio.obtenerSemilleros(this.paginaActual,this.opcionSeleccionada).subscribe((response)=>{
    this.respuestaModelo=response as RespuestaModelo
    this.semilleroModelo=response.data.content as SemilleroModelo[]
    this.numeroPaginas=response.data.totalPages
    this.paginaActual=response.data.pageable.pageNumber
    this.voffset=response.data.pageable.offset
    })
  }

  obtenerRespuesta2(){
    console.log(this.opcionSeleccionada)
    this.semilleroSevicio.obtenerSemilleros2(this.paginaActual,this.opcionSeleccionada).subscribe((response)=>{
    this.respuestaModelo=response as RespuestaModelo
    this.semilleroModelo=response.data.content as SemilleroModelo[]
    this.numeroPaginas=response.data.totalPages
    this.paginaActual=response.data.pageable.pageNumber
    this.voffset=response.data.pageable.offset
    })
  }

  onSelectChange(event: any) {
    this.opcionSeleccionada = event.target.value;
    console.log(this.opcionSeleccionada);

    console.log("offset: "+this.voffset);
    this.obtenerRespuesta2();
  }

  ngOnInit() {
    this.obtenerRespuesta();
    console.log(this.respuestaModelo)
  }

}
