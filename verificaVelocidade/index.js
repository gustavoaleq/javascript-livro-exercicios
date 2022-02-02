function verificarVelocidade(){
    var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");
    var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
    var outResposta = document.getElementById("outResposta")

    var velocidadeCondutor = Number(inVelocidadeCondutor.value);
    var velocidadePermitida = Number(inVelocidadePermitida.value);

    var limiteVelocidade = ((velocidadePermitida / 100) * 0.20) + velocidadePermitida;
    var limiteVelocidadeII = ((velocidadePermitida / 100) * 0.20) + velocidadePermitida + 1;
   
    if(velocidadeCondutor <= limiteVelocidade){
        outResposta.textContent = "Sem Multa";
        return;
    }
    
    if (velocidadeCondutor > limiteVelocidade){
        outResposta.textContent = "Multa Leve";
        return;
    } else if (velocidadeCondutor >= limiteVelocidadeII){
        outResposta.textContent = "Multa Grave";
}
}

var btVerifica = document.getElementById("btVerifica");
btVerifica.addEventListener("click", verificarVelocidade);