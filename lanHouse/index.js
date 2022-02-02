function calcularValor(){
    var inTempoUso = document.getElementById("inTempoUso");
    var inUsoCliente = document.getElementById("inUsoCliente");
    var outValorPagar = document.getElementById("outValorPagar");

    var valorPorMinuto = inTempoUso.value;
    var tempoDeUsoCliente = inUsoCliente.value;
    var valorPagar = (tempoDeUsoCliente / 15) * valorPorMinuto;

    outValorPagar.textContent = `Valor a Pagar R$: ${valorPagar}`
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor)