console.log ("=== Calculadora ===");

function calcular(){
    // Entrada de dados
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    //Processamento
    
    const resultado = num1 + num2;
    console.log(resultado);
    
    // Saída (exibir) dados
    document.getElementById('resultado').value = resultado;
}


