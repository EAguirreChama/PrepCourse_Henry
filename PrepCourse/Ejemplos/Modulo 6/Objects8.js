var Comidas = {};
var DiferenciaDeNotaciones = function (Prop1, Prop2) {
    Comidas[Prop1] = ["Frutas" , "Verduras"];
    Comidas[Prop2] = ["Hamburguesas" , "Papas Fritas" , "Snacks"];
};
//Ejecutemos la Funcion colocando nombres a las Propiedas del Objeto
DiferenciaDeNotaciones("Saludables" , "NoSaludables");
//Para ver que sucedio
console.log(Comidas); 