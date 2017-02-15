import { Injectable } from '@angular/core';

@Injectable()
export class RutasDeArchivosService {

  ruta: String;
  rutaOriginal: String;


  constructor() { }


  definirRuta(ruta) {

    if (!this.ruta) {
      this.rutaOriginal = ruta;
    }

    this.ruta = ruta;
  }


  obtenerRuta(): String {
    return this.ruta;
  }


  obtenerSuperior(): any {

    if (this.ruta != this.rutaOriginal) {
      return this.ruta.substr(0, this.ruta.lastIndexOf('/'));
    } else {
      return false;
    }

  }


}
