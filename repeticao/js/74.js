!(function () {
    let resposta = contagem();
    
    saidaDados(resposta);    
})()

function contagem() {
    let resp ="";    
    for (var i=1; i<=100; y++) {
        resp += i + ",";
        if (i % 10 ==0) {
            alert ("multiplo de 10!");
        }        
    }
    return resp;
}

function saidaDados(texto_saida) {
    document.getElementById ("saidaResultado").innerHTML = texto_saida;
}