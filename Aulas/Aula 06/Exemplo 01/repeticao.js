console.log ("=== Repetição ===")

// Número - 1 à 10

// let inicial = 1;
// const final = 10;

// while (inicial <= final) {
//     document.write (inicial);
//     // inicial = inicial + 1;
//     // inicial += 1;
//     inicial++;

// }

// Números - 50

// let inicial = 50;
// const final = 1;

// while (inicial >= final) {
//     document.write (inicial);
//     document.write("<br>")

//     inicial -= 1;


// }

// Números Pares de 0 a 100

// let inicial = 0;
// const final = 100;

// while (inicial <= final) {
//     document.write (inicial);
//     document.write("<br>")

//     inicial += 2;


// }

// Números Impares

// let inicial = 99;
// const final = 1;


// while (inicial >= final) {
//     if (inicial == 99){
//         document.write (inicial);
//     } else{
//         document.write (" - " + inicial);

//     }
//     inicial -= 2;
// }

// 

// let numero = null;

// while (numero != 0){
//     numero = prompt("Digite um número");
//     document.write(numero);
//     document.write("<br>");
// }

// let loop = true;

// while (loop){
//     let num = prompt("Digite um número: ");
//     console.log(num);

//     if (num == 0){
//         console.log ("Fim!");
//         loop = false;

//     }
// }

// FOR

// for (valorInicial; condicaoLogica; incremento);

// for (let cont = 1; cont <= 10; cont++){
//     document.write(cont, ' ');
// }

// 

// document.write('<hr>');
// numero = prompt("Digite a quantidade de asteriscos na tela:");
// for(let cont =1; cont<=numero; cont++){
//     document.write('*');
// }

// document.write('<hr>');

// for(let cont =1; cont<=5; cont++){
//     document.write('**********');
//     document.write("<br>")
// }

document.write ("<hr");

for (let lin=0; lin <5; lin++){
    for (let col=0; col<10; col++){
        document.write('*');
}
document.write('<br>');
}
