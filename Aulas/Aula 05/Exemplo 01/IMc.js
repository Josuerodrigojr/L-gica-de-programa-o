

function IMC() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    resultado = peso/(altura*altura);
    console.log (peso, altura, resultado);
    document.getElementById('resultado').value = resultado;
    if (resultado < 18.3){
        Indice = "Magreza"
    } else if (resultado >= 18.5 && resultado<=24.9){
        Indice = "Saudável"
    } else if (resultado >= 25 && resultado>=29.9){
        Indice = "Sobrepeso"
    } else if (resultado >= 30 && resultado>=34.9){
        Indice = "Obesidade Grau I"
    } else if (resultado >= 35 && resultado>=39.9){
        Indice = "Obesidade Grau II"
    } else if (resultado >= 40){
        Indice = "Obesidade Grau III"
    }
    document.getElementById("classificacao").value = Indice;
}