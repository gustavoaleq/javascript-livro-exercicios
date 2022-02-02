function mostrarPromocao(){
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcelas = document.getElementById("outParcelas")

    var veiculo = inVeiculo.value;
    var entrada = Number(inPreco.value) / 2;
    var parcelas =  entrada / 12;

    outVeiculo.textContent = "Promoção:" + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(3);
    outParcelas.textContent = "+ 12x de R$" + parcelas.toFixed(3);
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", mostrarPromocao)