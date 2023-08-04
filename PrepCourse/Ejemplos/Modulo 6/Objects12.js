//Creamos un Objeto
var Mascota = {
    //Creamos Propiedades
    Animal: "Perro" , 
    Raza: "Doberman" , 
    Agresivo: true , 
    Dueño: "Aguirre Ernesto" , 
    info: function () {
        //La Palabra This cambia el Contexto en el que estamos trabajando
        console.log("Mi perro es un " + this.Raza);
        console.log("Tengo un animal que es un " + this.Animal);
        console.log("El dueño de este animal es " + this.Dueño);
    },
};

Mascota.info ();