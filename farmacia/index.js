function mostrarPromocao(){
    var inMedicamento = document.getElementById("inMedicamento")
    var inPreco = document.getElementById("inPreco")
    var outMedicamento = document.getElementById("outMedicamento")
    var outPromocao = document.getElementById("outPromocao")

    var medicamento = inMedicamento.value; 
    var desconto = Number(inPreco.value) * 2;
    var  descontoArredondado = Math.floor(desconto);
    
    outMedicamento.textContent = `Promoção de ${medicamento}`
    outPromocao.textContent = `Leve 2 por apenas R$: ${descontoArredondado.toFixed(2)}`
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", mostrarPromocao); 