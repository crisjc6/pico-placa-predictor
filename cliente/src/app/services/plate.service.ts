import { Injectable } from '@angular/core';
import {placaDiaValido} from '../functions/placa-dia-valido.function';
import {PlacaIngresoInterface} from '../interfaces/placa-ingreso-interface';
import {validarPlaca} from '../functions/validar-placa.fuction';

@Injectable({
  providedIn: 'root'
})
export class PlacaService {

  constructor(
  ) { }

  predecirPlaca(placaIngreso: PlacaIngresoInterface): boolean | any {
    if (validarPlaca(placaIngreso.plateNumber)) {
      return placaDiaValido(placaIngreso.fecha, placaIngreso.plateNumber, placaIngreso.hora);
    } else {
      throw new Error ('Ultimo digito no correcto');
    }
  }

}
