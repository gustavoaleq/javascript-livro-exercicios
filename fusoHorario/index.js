function calcularHora(){
    var inHora = document.getElementById("inHora");
    var outHora = document.getElementById("outHora");

    var hora = Number(inHora.value);

    if (inHora.value == "" || isNaN(hora)) {
        alert("Informe a hora corretamente");
        inHora.focus(); //posiciona a escrita no input inHora
        return; //retorna para o inicio caso aconteça
    }

    var fusoFranca = hora + 5;

    if (fusoFranca > 24) {
        fusoFranca = fusoFranca - 24;
    }

    outHora.textContent = "Hora na França: " + fusoFranca.toFixed(2);
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularHora)