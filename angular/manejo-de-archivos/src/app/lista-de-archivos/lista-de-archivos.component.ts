import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  RutasDeArchivosService } from '../rutas-de-archivos.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-lista-de-archivos',
  templateUrl: './lista-de-archivos.component.html',
  styleUrls: ['./lista-de-archivos.component.css']
})
export class ListaDeArchivosComponent implements OnInit {

  archivos: Array<object>;
  extensionesPermitidas =  ['.jpg', '.png', '.gif'];
  archivoSeleccionado: File = null;

  constructor(private http:HttpClient , private rutasDeArchivos: RutasDeArchivosService) { }

  ngOnInit(): void {
    this.rutasDeArchivos.definirRuta('../archivos');
    this.peticionExterna();
  }

  mostrarRuta(): string {
    return this.rutasDeArchivos.obtenerRuta();
  }

  mostrarSuperior() {
    return this.rutasDeArchivos.obtenerSuperior();
  }

  irASuperior(){
    this.rutasDeArchivos.definirRuta(this.mostrarSuperior());
    this.peticionExterna();
  }

  peticionExterna():void{

    const data = {
      'ruta' : this.mostrarRuta()
    }

    this.http.get('http://localhost/servicios/leer-carpeta.php', {params:data} ).subscribe( (respuesta:Array<object>) => {
      this.archivos = respuesta;
    })
  }

  refrescar(){
    this.peticionExterna();
  }

  onFileSelected(event) {
    this.archivoSeleccionado = event.target.files[0];
  }


  onSubmit( data:any){

    const fd = new FormData();
    fd.append( 'file' , this.archivoSeleccionado );
    this.http.post('http://localhost/servicios/guardar-archivo.php', fd ).subscribe( () => {
       this.peticionExterna();
    })


  }


}
