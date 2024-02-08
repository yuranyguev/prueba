import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { RespuestaModelo } from '../../modelo/respuesta-modelo';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',

})
export class ServicioSemilleroService {
  private urlApi='http://localhost:8081/api/semilleros';
  token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5dXJhbmlAdW5pY2F1Y2EuZWR1LmNvIiwiaWF0IjoxNzA3MzQ1ODE5LCJleHAiOjE3MDc0MzIyMTl9.OfT6wze8C2iNof9HwAAA373AtSQq8lbQWRhVDeAVE5w";


  constructor(private http:HttpClient) {

   }

   obtenerSemilleros(numPagina:number,paginas:number){

    const httpHeaders={headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    }),}

      return this.http.get<RespuestaModelo>(`${this.urlApi}/paginado?pageNo=${numPagina}&pageSize=${paginas}`,httpHeaders)


   }
}
