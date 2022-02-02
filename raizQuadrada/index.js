function calcularRaiz() {
    var inNumero = document.getElementById("inNumero")
    var outRaiz = document.getElementById("outRaiz")

    var numero = Number(inNumero.value)

    var raizQuadrada = Math.sqrt(numero)

    if(raizQuadrada == Math.floor(raizQuadrada)){
        outRaiz.textContent = `A raiz quadrada desse número é ${raizQuadrada}`
    } else {
        outRaiz.textContent = `Não há raiz exata para ${numero}`
    }

    console.log(Math.floor(raizQuadrada))
    
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz)
