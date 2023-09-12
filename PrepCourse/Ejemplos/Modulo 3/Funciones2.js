function CuidadoConElConsoleLog (nombre) {
    console.log (nombre);
    return nombre;
};

function OtraFuncion () { 
    return (
        "El Nombre retornado por la funcion 'CuidadoConElConsoleLog' es: " +
        CuidadoConElConsoleLog ("Ernesto")
    );
};

function CuidadoConElReturn (nombre) {
    return nombre;
    console.log (nombre);
};
