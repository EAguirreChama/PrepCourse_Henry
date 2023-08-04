var Palabra = "Henri";
var PalabraSeparada = Palabra.split ("");
PalabraSeparada.pop ();
PalabraSeparada.push ("y");
// console.log (PalabraSeparada);

var PalabraArreglada = PalabraSeparada.join("");
console.log (PalabraArreglada);