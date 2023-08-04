/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  
  //Se define una variable a donde guardar los datos
  let arrayResultante = [];
  for(i = 0 ; i < array.length ; i++) {
    //array[i] significa que estoy entrando al elemento del arreglo en esa posicion
    //typeof significa que tipo de dato es
    if(typeof array[i] === "number") {
      arrayResultante.push(array[i])
    }
  }
  return arrayResultante;
}

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros