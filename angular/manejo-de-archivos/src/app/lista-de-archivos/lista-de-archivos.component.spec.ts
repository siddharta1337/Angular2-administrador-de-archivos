import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeArchivosComponent } from './lista-de-archivos.component';

describe('ListaDeArchivosComponent', () => {
  let component: ListaDeArchivosComponent;
  let fixture: ComponentFixture<ListaDeArchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
