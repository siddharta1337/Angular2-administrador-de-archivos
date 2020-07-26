import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RutasDeArchivosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
