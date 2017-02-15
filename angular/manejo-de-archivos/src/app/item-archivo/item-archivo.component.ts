import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestMethod, Request, URLSearchParams } from '@angular/http';
import { RutasDeArchivosService } from '../rutas-de-archivos.service';

@Component({
  selector: 'app-item-archivo',
  templateUrl: './item-archivo.component.html',
  styleUrls: ['./item-archivo.component.css']
})

export class ItemArchivoComponent implements OnInit {

  @Input()
  itemInfo: any;

  @Output()
  cambioArchivo: EventEmitter<number> = new EventEmitter();

  edicionActiva: Boolean;

  modeloItem: any;

  constructor(private http: Http, private rutasDeArchivo: RutasDeArchivosService) {
    this.modeloItem = {}

  }

  nuevaRuta(): void {
    this.rutasDeArchivo.definirRuta('../archivos/test2');
    this.cambioArchivo.emit();
  }






  ngOnInit() {
  }

  borrar(item): void {

    this.http.request(
      new Request({
        method: RequestMethod.Get,
        url: 'http://localhost/servicios/borrar-archivos.php',
        search: 'ruta-archivo=' + item.ruta + '/' + item.nombre
      })

    ).subscribe((res: Response) => {

      this.cambioArchivo.emit();

    })

  }


  activarEdicion(nombre: string): void {
    this.edicionActiva = true;
    this.modeloItem.nuevoNombre = nombre;

  }

  desactivarEdicion(): void {
    this.edicionActiva = false;
  }


  renombrar(item): void {

    let parametros: URLSearchParams = new URLSearchParams();

    parametros.set('ruta-archivo', item.ruta + '/' + item.nombre);
    parametros.set('nuevo-archivo', item.ruta + '/' + this.modeloItem.nuevoNombre);


    this.http.request(
      new Request({
        method: RequestMethod.Get,
        url: 'http://localhost/servicios/renombrar-archivos.php',
        search: parametros
      })

    ).subscribe((res: Response) => {

      this.cambioArchivo.emit();

    })

  }

}
