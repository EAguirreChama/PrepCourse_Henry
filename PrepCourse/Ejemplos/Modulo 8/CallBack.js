var DevuelvoUsuario = function () {
    return "soy Ernesto";
};

var DevuelvoSaludo = function () { 
    return "Hola";
};

var Edad = function () {
    return "tengo 21 años"
};

var Saludar = function (cb1, cb2, cb3) {
    return cb1() + " " + cb2() + " y " + cb3() + " de edad.";
};

var Resultado = Saludar(DevuelvoSaludo, DevuelvoUsuario, Edad);
console.log(Resultado);