class LatinoAmerica {
    constructor() {
        this.Paises = [];
    }
}
LatinoAmerica.prototype.AgregarPais = function (pais) {
    this.Paises.push (pais);
};

var Continente = new LatinoAmerica();
Continente.AgregarPais("Argentina");
console.log(Continente.Paises);