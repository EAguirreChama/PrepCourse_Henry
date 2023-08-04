//Para declarar una Clase, siempre la 1ra Letra de su nombre debe ir en Mayuscula
//Las Clases tiene  1- Propiedas , 2- Metodos
function Auto (puertas, color, marca, año, ruedas) {
    //Para declarar las propiedas vamos a usar "this" seguido del nombre de la propiedad
    //Se iguala al valor recibido por parametro 
    //Las Propiedades de esta Clase (Auto)
    //Los valor serán recibidos por parametros (lo que esta entre ())
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;

    //Para agregar metodos
    this.informacion = function () {
        console.log ("Este es un " + this.marca + " de color " + this.color);
    }
}
//Utilizar esta plantilla
//Se le colocan valores a los parametros
//La palabra "new" quiere decir que utilizamos la plantilla de nuestra clase
var MiPrimerAuto = new Auto (2, "Rojo", "Ferrari", 2020, 4);

//Acceder a la Info
MiPrimerAuto.informacion ();

// console.log(MiPrimerAuto);
// console.log(MiPrimerAuto.marca);