function mostrarPromocao(){
    var inProduto = document.getElementById("inProduto")
    var inPreco = document.getElementById("inPreco")
    var outProduto = document.getElementById("outProduto")
    var outDesconto = document.getElementById("outDesconto")

    var produto = inProduto.value;
    var preco = Number(inPreco.value); 
    var promocao = preco / 2;
    var produtoTres = (preco * 2) + promocao

    outProduto.textContent = `${produto} - Promoção: Leve 3 por R$: ${produtoTres.toFixed(2)}`;
    outDesconto.textContent = `O 3º produto custara apenas R$: ${promocao}`;
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", mostrarPromocao)