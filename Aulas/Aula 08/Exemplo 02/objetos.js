// console.log("=== OBJETOS ===");

// const carro1 = ["Gol", 2010, 'Vermelho', "Usado"];
// const carro2 = ["Fox", 2015 ,"Preto", "Zero"];
// const carro3 = ["Uno", 200 ,"Verde", "Usado"];
// const carros = [carro1, carro2, carro3];


// for(let index = 0; index<carros.length; index++){
//   console.log(carros[index][0])   
// }

// Objeto literal

// const carro1 = {
//     modelo: "Gol",
//     ano: 2010,
//     cor: "Vermelho",
//     situacao: "usado"
// }

// const carro2 = {
//     modelo: "Fox",
//     ano: 2015,
//     cor: "Preto",
//     situacao: "Zero"
// }

const carro1 = [
    {
    modelo: "Gol",
    ano: 2010,
    cor: "Vermelho",
    situacao: "Usado"
},
{
    modelo: "Fox",
    ano: 2015,
    cor: "Preto",
    situacao: "Zero"
},
{
    modelo: "Uno",
    ano: 2010,
    cor: "Verde",
    situacao: "Usado"
}
];


// Objeto.propriedade

let usados = carro1.filter(function(carro){
    return carro.situacao == "Usado";
});
console.log(usados);

