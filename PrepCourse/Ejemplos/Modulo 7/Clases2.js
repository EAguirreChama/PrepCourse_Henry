//No se agregan parentesis porque no es una funcion
class Auto {
    //Recordemos que las clases tienen Propiedas y Metodos
    //Para declarar las propiedas se usan la palabra "constructor" seguido de () {}
    //Las Propiedas las recibiremos por parametros por lo que las escribiremos dentro del parentesis
    constructor (puertas, color, marca, año, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
    informacion () {
        console.log ("Este es un " + this.marca + " de color " + this.color); 
    }
}

var MiSegundoAuto = new Auto(4, "Blanco", "Fiat", 2015, 4);
MiSegundoAuto.informacion();

// console.log (MiSegundoAuto);
// console.log (MiSegundoAuto.marca);