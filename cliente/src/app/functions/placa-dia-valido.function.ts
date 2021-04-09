import * as moment from 'moment';
import {HoraInterface} from '../interfaces/hora.interface';
import {comprobarHora} from './comprobar-hora.function';
export function placaDiaValido(fecha: string, placa: string, hora: HoraInterface): boolean  {

  const fechaIngresada = moment(fecha);
  const arrayPlaca = placa.split('');
  const diaSemanaIngresado = moment(fechaIngresada).day();
  const valUltimoDigito = arrayPlaca.pop();
  let respuesta = false;
  console.log(+diaSemanaIngresado);
  switch (+diaSemanaIngresado) {
    // lunes
    case 1: {
      console.log('esta en el dia lunes');
      if (valUltimoDigito) {
        if (+valUltimoDigito === 1 || +valUltimoDigito === 2 ) {
          if (comprobarHora(hora, fecha)) {
            respuesta = true;
          }  else {
            respuesta = false;
          }
        } else {
          respuesta = true;
        }
      }
      break;
    }
    // Martes
    case 2: {
      console.log('esta en el dia martes');
      if (valUltimoDigito) {
        if (+valUltimoDigito === 3 || +valUltimoDigito === 4 ) {
          if (comprobarHora(hora, fecha)) {
            respuesta = true;
          } else {
            respuesta = false;
          }
        }  else {
          respuesta = true;
        }
      }
      break;
    }
    // Miercoles
    case 3: {
      console.log('esta en el dia miercoles');
      if (valUltimoDigito) {
        if (+valUltimoDigito === 5 || +valUltimoDigito === 6 ) {
          if (comprobarHora(hora, fecha)) {
            respuesta = true;
          }  else {
            respuesta = false;
          }
        } else {
          respuesta = true;
        }
      }
      break;
    }
    // Jueves
    case 4: {
      console.log('esta en el dia jueves');
      if (valUltimoDigito) {
        if (+valUltimoDigito === 7 || +valUltimoDigito === 8 ) {
          if (comprobarHora(hora, fecha)) {
            respuesta = true;
          }  else {
            respuesta = false;
          }
        }
        else {
          respuesta = true;
        }
      }
      break;
    }
    // Viernes
    case 5: {
      console.log('esta en el dia viernes');
      if (valUltimoDigito) {
        if (+valUltimoDigito === 9 || +valUltimoDigito === 0 ) {
          if (comprobarHora(hora, fecha)) {
            respuesta = true;
          }  else {
            respuesta = false;
          }
        }  else {
          respuesta = true;
        }
      }
      break;
    }
    // Sabado Domingo
    default: {
      respuesta = true;
      break;
    }
  }
  return respuesta;
}
