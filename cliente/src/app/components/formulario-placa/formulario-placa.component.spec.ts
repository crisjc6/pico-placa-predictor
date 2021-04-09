import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPlacaComponent } from './formulario-placa.component';

describe('FormularioPlacaComponent', () => {
  let component: FormularioPlacaComponent;
  let fixture: ComponentFixture<FormularioPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPlacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
