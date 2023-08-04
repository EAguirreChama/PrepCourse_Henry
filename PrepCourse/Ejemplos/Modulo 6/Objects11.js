var Mundo = { Continentes: 7 , Paise: 195 , Oceanos: 5};
for (var Prop in Mundo) {
    console.log("Esta es la Propiedad: " + Prop);
    //Se utiliza Bracket-Notation para acceder al valor de esa propiedad
    console.log("Este es el Valor: " + Mundo[Prop]);
};
  