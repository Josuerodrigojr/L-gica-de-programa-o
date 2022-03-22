function pratica(){
    let nome = prompt("Digite seu nome");
    let teste1 = parseFloat(prompt("Digite a primeira nota"));
    let teste2 = parseFloat(prompt("Digite a segunda nota"));
    let resultado = (teste1 + teste2)/2;
    document.getElementById('resultado').innerHTML = (`Calculando a média final de ${nome} <br> As notas obtidas foram ${teste1} e ${teste2} <br> A média final será ${resultado}`);
}