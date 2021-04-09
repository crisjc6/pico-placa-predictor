import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoPlacaComponent } from './resultado-placa.component';

describe('ResultadoPlacaComponent', () => {
  let component: ResultadoPlacaComponent;
  let fixture: ComponentFixture<ResultadoPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoPlacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
