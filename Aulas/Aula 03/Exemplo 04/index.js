

function maior(){
    let num1 = parseFloat(document.getElementById('num1').value); 
    let num2 = parseFloat(document.getElementById('num2').value);
    let comparar = document.getElementById("comparacao").value;

    if (comparar == '>'){
        resultado = num1>num2;
    } else if (comparar == '<'){
        resultado = num1<num2;
    } else if (comparar == '='){
        resultado = num1==num2;
    } else if (comparar == '>='){
        resultado = num1>=num2;
    } else{
        resultado = num1<=num2;
    }
    

    
    console.log(resultado)
    document.getElementById('resultado').value = resultado;
}