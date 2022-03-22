function pratica(){
    let teste = parseFloat(prompt("Digite um número"));
    let primeiroValor = teste*2;
    let segundoValor = teste/2;
    document.getElementById('resultado').innerHTML = (`O dobro de ${teste} é ${primeiroValor} e a metade é ${segundoValor}!`);
}