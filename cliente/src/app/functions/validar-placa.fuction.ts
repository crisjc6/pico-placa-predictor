export function validarPlaca(placa: string): boolean {
  const arrayPlaca = placa.split('');
  const valUltimoDigito  = arrayPlaca.pop();
  let respuesta = false;
  if (valUltimoDigito){
    respuesta = !!(+valUltimoDigito);
  }
  console.log(respuesta);
  return respuesta;
}
