function maior(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const comparar = document.getElementById('comparacao').value;
    switch (comparar){
    case '>':
        var resultado = num1 > num2;
        break
    case '<':
        var resultado = num1 < num2;
        break
    case '=':
        var resultado = num1 == num2;
        break
    case '>=':
        var resultado = num1 >= num2;
        break
    case '<=':
        resultado = num1 <= num2;
        break
    case '<>':
        resultado = num1!=num2;
        break
    }
    document.getElementById('resultado').value = resultado;

    
}