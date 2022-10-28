12345678901234567890
// !(function () {          
//     adicionaIdade();
// })()

// function adicionaIdade(idades = [],idade =0) { 
//     document.getElementById("idade").addEventListener('keypress', function (e) {        
//         if (e.key === 'Enter') {
//             idade = parseInt(document.getElementById("idade").value);                      
//             idades.push(idade); 
//         }
//         return idades;
//     });    
// }

function adicionaIdade() {
    let idades = [];
    let idade = parseInt(document.getElementById("idade").value);
    idades.push(idade);
    return idades;
}

function controllerIdade() {
    let mediaidade = 0;
    let calculaidade = adicionaIdade();
    let resposta = calculaMedia(calculaidade,mediaidade);

    saidaDados("a média de idades é = " + resposta);
}

function calculaMedia(calculaidade = [], mediaidade = 0) {
    for (var i =1; i<calculaidade.length; i++) {
        mediaidade += (calculaidade [i]);
    }
        return mediaidade /i;
}

function saidaDados(texto) {
        document.getElementById('saidaTexto').innerHTML = texto;
}

