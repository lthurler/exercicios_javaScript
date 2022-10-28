!(function () {
    let contagem = contarAte();
    saidaTexto(contagem);
})()

function contarAte() {
    let impares = "";
    
        for (var i = 100; i <= 200; i++) {            
            if (i % 2 !== 0) {
                impares += i + ",";
            }
        }
    
    return impares;
}

function saidaTexto(texto) {
    document.getElementById("saidaResultado").innerHTML = texto;
}