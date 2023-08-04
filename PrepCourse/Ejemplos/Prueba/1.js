function mayorMenor(numeros) {
    // La función llamada 'mayorMenor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
    // arreglo que contenga el mayor número del arreglo 'numeros' en la posición uno y el menor número del arreglo
    // 'numeros' en la posición cero.
    // Ej:
    // mayorMenor([9, 17, 6, 2, 4]) debe retornar [2, 17]
    // ya que 17 es el número más grande (mayor) dentro del arreglo [9, 17, 6, 2, 4]
    // y 2 es el número más chico (menor) dentro del arreglo [9, 17, 6, 2, 4]
  
    // Tu código aca:
    var NumMayor = - Infinity
var NumMenor = Infinity
var NuevoArreglo = [0,0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > NumMayor){
    NumMayor = numeros[i]
    NuevoArreglo[1] = NumMayor
  } else if (numeros[i] < NumMenor) {
    NumMenor = numeros[i]
    NuevoArreglo[0] = NumMenor
  }
}

return NuevoArreglo;
}