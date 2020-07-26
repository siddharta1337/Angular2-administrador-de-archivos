import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasDeArchivosService {

  rutaOriginal: string;
  ruta:string;

  constructor() { }

  definirRuta(ruta) {
    if (!this.ruta) {
      this.rutaOriginal = ruta;
    }
    this.ruta = ruta;
  }

  obtenerRuta(): string {
    return this.ruta;
  }

  obtenerSuperior(): any {
    if (this.ruta !== this.rutaOriginal) {
      return this.ruta.substr(0, this.ruta.lastIndexOf('/'));
    } else {
      return false;
    }
  }
  
}
