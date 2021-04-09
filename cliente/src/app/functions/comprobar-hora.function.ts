import {HoraInterface} from '../interfaces/hora.interface';
import * as moment from 'moment';

export function comprobarHora(hora: HoraInterface, fecha: string ): boolean{

  const tiempoIngresado = `${hora.hour}:${hora.minute}`;
  const tiempo = moment(tiempoIngresado, 'hh:mm');
  const tiempoIniMorning = moment('07:00', 'hh:mm');
  const tiempoFiMorning = moment('09:30', 'hh:mm');
  const tiempoIniAfternoon = moment('16:00', 'hh:mm');
  const tiempoFiAfternoon = moment('19:30', 'hh:mm');

  if (tiempo.isBetween(tiempoIniMorning, tiempoFiMorning) || tiempo.isBetween(tiempoIniAfternoon, tiempoFiAfternoon)) {
    console.log('no puede circular');
    return false;

  } else {
    console.log('puede circular');
    return true;

  }
}
