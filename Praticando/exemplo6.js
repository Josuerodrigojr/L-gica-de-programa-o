function pratica(){
    let teste1 = parseFloat(prompt("Digite um número"));
    let teste2 = parseFloat(prompt("Digite outro número"));
    let resultado = teste1 + teste2;
    document.getElementById('resultado').innerHTML = (`A soma entre ${teste1} e ${teste2} é ${resultado}!`);
}