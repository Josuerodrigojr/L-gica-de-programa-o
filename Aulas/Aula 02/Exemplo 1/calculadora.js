console.log ("=== Calculadora ===");

function calcular(){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultado = num1 + num2;
    document.querySelector("#resultado").innerHTML = resultado;
}
