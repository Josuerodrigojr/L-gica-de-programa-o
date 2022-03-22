console.log("=== ARRAY ===");

// array literal

const carros = ["Gol", 'Corsa', 'Fox'];
// Adicionando um arquivo no último elemento, não precisa ser só um elemento. carros.push("Corolla", "Outro carro");
carros.push("Corolla");

// Adicionando um arquivo no começo da array
carros.unshift("Marea")

//Remove o elemento, o primeiro valor é o local que deve remover e o segundo é a quantidade de elementos que se deve retirar
carros.splice(1,1);

// Substituição 
carros.splice(0,1,"BMW");

//Adicionar o valor na posição 2.
carros.splice (2,0,'Fusca', 'Golf');

//Remover o último item
carros.pop();

// Remove o item do inicio 
carros.shift();

//Ordenar os elementos
carros.sort();

//Inverter a ordem dos items.
carros.reverse();

// Mostrar cada item de um lista
// Função nomeada - No comando forEach não precisa colocar a função com o (), ele vai pegar o elemento e a posição, definir por variaveis.
function pegaCarro (modelo, pos){
    console.log(modelo, pos);

}

carros.forEach(pegaCarro);

// Função não nomeada - Usada para quando utilizamos a função somente para executar o que está dentro da forEach.

carros.forEach(function(value, index){
    console.log("funfa?", value, index);
});

console.log (carros);
console.log(carros.length);