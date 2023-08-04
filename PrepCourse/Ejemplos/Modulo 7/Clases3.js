//Declara nueva clase
class Futbol {
    //Una Propiedad
    constructor (jugador) { 
        this.jugador = jugador;
    }
    //Un Metodo
    obtenerNombre () {
        console.log (this.jugador);
    }
}
//Se crean dos instancias
var Argentina = new Futbol ("Messi"); //Argumento Messi
var Brasil = new Futbol ("Neymar"); //Argumento Neymar
//Ejecutamos el Metodo "obtenerNombre de cada Instancia"
Argentina.obtenerNombre();
Brasil.obtenerNombre();