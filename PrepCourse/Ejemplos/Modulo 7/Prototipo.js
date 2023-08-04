//Con la Palabra "prototype" indicamos que queremos acceder a esta Propiedad al prototipo del Objeto Global "array"
//Se coloca el NombredelObjetoGlobal "Array" . "prototype" . NombredelMetodo "MayoresqueTres"
//Se iguala a una Funcion
//Se crea una logica para poder acceder a los valores que ejecute este metodo
Array.prototype.MayoresqueTres = function() {
    var ArregloModificado = [];
    for (let i = 0 ; i < this.length ; i++) {
        if (this[i] > 3) {
            ArregloModificado.push (false);
        } else { 
            ArregloModificado.push (this[i]);
        }
    }
    return ArregloModificado;
};

var Arreglo = [1, 2, 3, 4, 5];
var NuevoArreglo = Arreglo.MayoresqueTres();
console.log(NuevoArreglo);
