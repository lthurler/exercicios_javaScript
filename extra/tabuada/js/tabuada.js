function controllerTabuada() {
    let numero = parseInt(document.querySelector("numero").value);
    let resultado = montarTabuada(numero);
    saidaDados(resultado);
}

function saidaDados(texto) {
    documento.querySelector("#saidaResultado").innerHTML = texto;
}

function montarTabuada(numero = 0) {
    let tabuada = "";
    for (let i = 1; i<=10; index++) {
        tabuada += numero + " X " + i + " = " + (numero * i) + "<br>";
    }
    return tabuada;
}
