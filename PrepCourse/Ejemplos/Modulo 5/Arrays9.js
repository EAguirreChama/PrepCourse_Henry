function EncontrarLetraP (string) {
    var letras = string.split("");
    for (let i = 0; i < letras.length; i++) {
        if (letras [i] === "p") {
            console.log ("Si Contiene a P");
        }
    }
}

EncontrarLetraP ("JavasScript");
EncontrarLetraP ("Henry");