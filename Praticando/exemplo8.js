function pratica(){
    let teste1 = parseFloat(prompt("Digite a primeira nota"));
    document.getElementById("introducao").innerHTML = (`O número a ser analisado aqui será o ${teste1}`)
    document.getElementById('resultado').innerHTML = (`O seu valor absoluto é ${Math.abs(teste1)} <br> A sua parte inteira ${Math.floor(teste1)} <br> O valor inteiro mais proximo é ${Math.fround(teste1)} <br> A raiz quadrada é ${Math.sqrt(teste1)} <br> A raiz cúbica é ${Math.cbrt(teste1)}  <br> O valor de ${teste1}<sup>2</sup> é ${Math.pow(teste1, 2)} <br> O valor de ${teste1}<sup>3</sup> é ${Math.pow(teste1, 3)}`);
}