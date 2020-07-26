import { TestBed } from '@angular/core/testing';

import { RutasDeArchivosService } from './rutas-de-archivos.service';

describe('RutasDeArchivosService', () => {
  let service: RutasDeArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutasDeArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
