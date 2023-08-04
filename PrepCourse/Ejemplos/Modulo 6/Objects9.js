//Ver si un Objeto tiene una Propiedad

//Se crea un Objeto con sus Propiedas
var Libro = {Autor: "Borges" , Genero: "Policial" , Año: 1990};
//Se crea una Variable para identificar la Propiedad
var TieneEstaPropiedad = Libro.hasOwnProperty ("Autor");
console.log (TieneEstaPropiedad);

//Si colocamos "Nombre" arrojara False
//Si colocamos "Autor" arrojara True