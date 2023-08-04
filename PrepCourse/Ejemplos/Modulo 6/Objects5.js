//Como borrar una Propiedad

var Autos = {};
Autos.Marcas = ["Chevrolet" , "Ferrari" , "Audi"];
Autos.Tipos = ["Camionetas" , "Autos" , "SUV"];
//Para borrar una propiedad se utiliza la Palabra "Delete" de la siguiente manera
//delete Nombre del Objeto (Autos) . Nombre de la Propiedad (Tipos)
delete Autos.Tipos;
//Para mostrar el Resultado
console.log(Autos);