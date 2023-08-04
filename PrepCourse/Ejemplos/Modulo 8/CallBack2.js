var DevuelvoFrase = function (Comida) {
    return "Hoy quiero comer: " + Comida;
};

var Hablar = function (Comida, cb) { 
    return cb(Comida);
};

var FraseFinal = Hablar("Pizza", DevuelvoFrase);
console.log (FraseFinal);