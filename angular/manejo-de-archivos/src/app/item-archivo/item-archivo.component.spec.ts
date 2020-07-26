import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemArchivoComponent } from './item-archivo.component';

describe('ItemArchivoComponent', () => {
  let component: ItemArchivoComponent;
  let fixture: ComponentFixture<ItemArchivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemArchivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
