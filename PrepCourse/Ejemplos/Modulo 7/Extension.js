class Persona {
    constructor(Nombre, Edad) {
        this.Nombre = Nombre;
        this.Edad = Edad;
    }
    //Metodo
    Saludar() {
        console.log ("Hola, mi nombre es " + this.Nombre + ". Tengo " + this.Edad);
    }
};

//Se crea una nueva Clase
//Se coloca la Palabra "extends"
//Y el nombre de la clase a la que se quiere extender

class Programador extends Persona {
    //Se indica que propiedades queremos que tenga la nueva clase
    constructor(Nombre, Edad, AñosdeExperiencia) {
        //Para que heredemos las propiedas de la clase anterior se coloca la palabra "super" y va dentro del constructor
        //Dentro de los parentesis se escribe el nombre de las propiedades que se quieren heredar
        super(Nombre, Edad);
        this.AñosdeExperiencia = AñosdeExperiencia;
    }
    //Se agrega un metodo
    Codear() {
        console.log("Soy " + this.Nombre + ". Codeo desde hace " + this.AñosdeExperiencia + " años." )
    }
}

var Martin = new Persona ("Martin" , 26);
var programador = new Programador ("Ernesto", 21, 2);

Martin.Saludar();
programador.Codear();

//Si se quiere que use el Metodo "Saludar" la clase Programador se hace =>

programador.Saludar();