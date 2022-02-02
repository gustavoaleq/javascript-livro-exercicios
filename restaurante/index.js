function mostrarValor(){
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    var valorBuffet = Number(inQuilo.value);
    var consumoCliente = Number(inConsumo.value);
    
    var valor = (valorBuffet / 1000) * consumoCliente;
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarValor);