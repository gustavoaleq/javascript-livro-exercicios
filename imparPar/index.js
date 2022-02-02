function verificar(){
    var inNumero = document.getElementById("inNumero") 
    var outResposta = document.getElementById("outResposta")

    var numero = Number(inNumero.value)

    if(numero % 2 == 0){
        outResposta.textContent = `${numero} é Par`
    } else {
        outResposta.textContent = `${numero} é Impar`
    }
}

var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificar)