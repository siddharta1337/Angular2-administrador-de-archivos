import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  RutasDeArchivosService } from '../rutas-de-archivos.service';

@Component({
  selector: 'app-item-archivo',
  templateUrl: './item-archivo.component.html',
  styleUrls: ['./item-archivo.component.css']
})
export class ItemArchivoComponent implements OnInit {

  @Input()
  itemInfo:any

  @Output()
  cambioArchivo: EventEmitter<number> = new EventEmitter();

  edicionActiva: boolean;

  modeloItem:string;

  constructor(private http:HttpClient , private rutasDeArchivos:RutasDeArchivosService) { 
    
  }

  ngOnInit(): void {
  }

  borrar(item){

    const detalles = {
      'ruta-archivo' : item.ruta + "/" + item.nombre
    }

    this.http.get('http://localhost/servicios/borrar-archivos.php' , { params : detalles} ).subscribe( ()=>{
        this.cambioArchivo.emit()
    }) 
  }

  activarEdicion(nombre:string): void {
    this.modeloItem = nombre;
    this.edicionActiva = true;
  }

  desactivarEdicion(): void {
    this.edicionActiva = false;
  }

  renombrar(item):void{
    const detalles = {
      'ruta-archivo' : item.ruta + "/" + item.nombre,
      'nuevo-archivo' : item.ruta + "/" +  this.modeloItem
    }

    this.http.get('http://localhost/servicios/renombrar-archivos.php' , { params : detalles} ).subscribe( ()=>{
        this.cambioArchivo.emit()
    }) 
  }



  nuevaRuta(item): void {
    this.rutasDeArchivos.definirRuta(item.ruta + '/' + item.nombre);
    this.cambioArchivo.emit();
  }


}
