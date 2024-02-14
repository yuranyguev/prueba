import { Data } from "./semillero/data-modelo";

export class RespuestaModelo {
  status!: number ;
  usserMesage!: string;
  developerMessage!: string;
  data: Data | any;
}
