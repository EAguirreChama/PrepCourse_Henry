//Ver las Propiedades de un Objeto

//Se crea un Objeto con sus Propiedas
var Libro = {Autor: "Borges" , Genero: "Policial" , Año: 1990};
//Se crea una Variable para identificar la Propiedad
var TodasSusPropiedas = Object.keys (Libro);
console.log (TodasSusPropiedas);

//Arrojara un arreglo con todas sus propiedas
