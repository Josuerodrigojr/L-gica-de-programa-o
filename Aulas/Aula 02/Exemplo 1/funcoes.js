console.log("=== Funções ===");

// Função Nomeada
function soma(var1 = 0, var2 = 0) {
    return var1 +var2;
}


console.log (soma);
console.log (soma ());
console.log (soma(5));
console.log (soma (5,10));




//Função não nomeada (Anônima)

const sum = function (a = 0, b=0){
    return a+b;

}

console.log (sum);
console.log(sum());
console.log (sum(5));
console.log (sum(5,10));