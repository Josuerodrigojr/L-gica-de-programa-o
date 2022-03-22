let numeros = [2, 3, 4, 32, 21, 25, 17, 1];

// Arguments só funciona dentro de uma função
// numeros.forEach(function(){
//     console.log(arguments);
// });

// o forEach serve somente para executar dados de uma array.
// numeros.forEach(function(num, indice){
//     console.log(num, indice)
// });

// Map - O map serve para podermos transformar os valores dos elementos de uma array.
numeros = numeros.map(function(numero){
    console.log("teste", numero);
    return numero *5;
});



//Filter - Cada informação dentro do Array, o filter vai passar uma regra, e pegar os valores que vão entrar dentro do criterio.
// numeros = numeros.filter(function(numero){
//     console.log("teste", numero);
//     return numero < 25;
// });

console.log(numeros);



//Reduce