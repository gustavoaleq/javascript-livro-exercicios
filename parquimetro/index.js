function calcularDeposito(){
    var inValor = document.getElementById("inValor")
    var outTempo = document.getElementById("outTempo")
    var outTroco = document.getElementById("outTroco")

    var valor = Number(inValor.value)
    
    if(valor == 1.00)
    return outTempo.textContent = "Tempo: 30 min";
    if(valor == 1.75)
    return outTempo.textContent = "Tempo: 60 min";
    if(valor == 2.00) {
    outTempo.textContent = "Tempo: 60 min"
    outTroco.textContent = "Troco R$: 0.25" }
    if(valor == 3.00)
    return outTempo.textContent = "Tempo: 120 min";
    if(valor == 2.50)
    outTempo.textContent = "Tempo: 90 min";
    if(valor < 1.00)
    return outTempo.textContent = "Valor insuficiente";
    if(valor > 3.00){
    outTempo.textContent = "Tempo: 60 min"
    outTroco.textContent = `Troco R$:${valor - 3.00}.00`
    }
}

var btConfirmar = document.getElementById("btConfirmar")
btConfirmar.addEventListener("click", calcularDeposito)

