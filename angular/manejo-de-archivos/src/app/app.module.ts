import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgUploaderModule } from 'ngx-uploader';

import { AppComponent } from './app.component';
import { ListaDeArchivosComponent } from './lista-de-archivos/lista-de-archivos.component';
import { ItemArchivoComponent } from './item-archivo/item-archivo.component';
import { FiltroExtensionPipe } from './filtro-extension.pipe';
import {  RutasDeArchivosService} from './rutas-de-archivos.service'
 

@NgModule({
  declarations: [
    AppComponent,
    ListaDeArchivosComponent,
    ItemArchivoComponent,
    FiltroExtensionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgUploaderModule
  ],
  providers: [ 
    RutasDeArchivosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
