function par(){
    let numero = parseFloat(prompt("Digite um número: "));
    let resultado = "";
    if (numero%2 === 0){
        resultado = "Par"
    } else {
        resultado = "Ìmpar"
    }
    document.getElementById('mensagem').innerHTML = (`O número ${numero} que foi digitado é <strong>${resultado.toUpperCase()} </strong>`)
}