import { Component, OnInit, EventEmitter, NgZone, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RutasDeArchivosService } from '../rutas-de-archivos.service';
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';


@Component({
  selector: 'app-lista-de-archivos',
  templateUrl: './lista-de-archivos.component.html',
  styleUrls: ['./lista-de-archivos.component.css']
})
export class ListaDeArchivosComponent implements OnInit {

  archivos: Array<Object>;
  options: NgUploaderOptions;
  miModelo: any = {};
  inputUploadEvents: EventEmitter<string>;
  response: any;





  //private router: Router, private route: ActivatedRoute,  ) {

  constructor(private http: Http, @Inject(NgZone) private zone: NgZone, private rutasDeArchivosService: RutasDeArchivosService) {

    this.options = new NgUploaderOptions({
      url: 'http://localhost/servicios/guardar-archivo.php',
      data: this.miModelo,
      filterExtensions: true,
      allowedExtensions: ['jpg', 'png', 'gif'],
      autoUpload: false,
      fieldName: 'file',
      fieldReset: true,
      maxUploads: 2,
      method: 'POST',
      previewUrl: true,
      withCredentials: false
    });

    this.inputUploadEvents = new EventEmitter<string>();



    this.rutasDeArchivosService.definirRuta('../archivos');
  }

  mostrarRuta(): String {
    return this.rutasDeArchivosService.obtenerRuta();
  }


  mostrarSuperior() {
    return this.rutasDeArchivosService.obtenerSuperior();
  }

  irASuperior() {
    this.rutasDeArchivosService.definirRuta(this.mostrarSuperior());
    this.peticionExterna();
  }



  ngOnInit() {

    this.peticionExterna();
  }

  refrescar(): void {
    this.peticionExterna();
  }





  peticionExterna(): void {

    this.miModelo.ruta = this.mostrarRuta();

    this.http.request('http://localhost/servicios/leer-carpeta.php?ruta=' + this.mostrarRuta())
      .subscribe((res: Response) => {

        this.archivos = res.json();
      })
  }

  onSubmit(f: any): void {

    this.inputUploadEvents.emit('startUpload');

  }


  handleUpload(data: any) {

    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.peticionExterna();
        }
      });
    });
  }




}
