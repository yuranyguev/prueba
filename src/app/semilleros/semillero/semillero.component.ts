import { Component , OnInit} from '@angular/core';
import { ServicioSemilleroService } from '../../servicio/semillero/servicio-semillero.service';
import { response } from 'express';
import { RespuestaModelo } from '../../modelo/respuesta-modelo';
import { SemilleroModelo } from '../../modelo/semillero-modelo';

@Component({
  selector: 'app-semillero',
  standalone: true,
  imports: [],
  templateUrl: './semillero.component.html',
  styleUrl: './semillero.component.css'
})
export class SemilleroComponent {

  respuestaModelo: RespuestaModelo=new RespuestaModelo;
  SemilleroModelo:SemilleroModelo[]=[];

  constructor( private semilleroSevicio:ServicioSemilleroService){

  }

  obtenerRespuesta(){
    this.semilleroSevicio.obtenerSemilleros().subscribe((response)=>{
    this.respuestaModelo=response as RespuestaModelo
    this.SemilleroModelo=response.data.content as SemilleroModelo[]
    })
  }
  ngOnInit() {
    this.obtenerRespuesta();
    console.log(this.respuestaModelo)
  }

}
