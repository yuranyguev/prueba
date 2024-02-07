import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { RespuestaModelo } from '../../modelo/respuesta-modelo';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',

})
export class ServicioSemilleroService {
  private urlApi='http://localhost:8081/api/semilleros';
  token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5dXJhbmlAdW5pY2F1Y2EuZWR1LmNvIiwiaWF0IjoxNzA3MzIzNTE5LCJleHAiOjE3MDc0MDk5MTl9.2H8GXxVOldtdMTwSlyuEzs0iiSdBOA2_GlIlWWVENZs";


  constructor(private Http:HttpClient) {

   }

   obtenerSemilleros(){

    const httpHeaders={headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    }),}

      return this.Http.get<RespuestaModelo>(`${this.urlApi}/paginado`,httpHeaders)


   }
}
