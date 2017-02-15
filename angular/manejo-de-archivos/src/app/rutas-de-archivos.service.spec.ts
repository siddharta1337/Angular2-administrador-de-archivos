/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RutasDeArchivosService } from './rutas-de-archivos.service';

describe('RutasDeArchivosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RutasDeArchivosService]
    });
  });

  it('should ...', inject([RutasDeArchivosService], (service: RutasDeArchivosService) => {
    expect(service).toBeTruthy();
  }));
});
