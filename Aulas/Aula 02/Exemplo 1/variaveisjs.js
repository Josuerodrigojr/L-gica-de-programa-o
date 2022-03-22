console.log("=== VARIAVEIS ===");

//Javescript - Especificação -> EcmaScript (ES)
//Jun / -ES5 -> var
//Jul / -ES5 -> let e const

//Padrão ASI - Automatic Semicolon Insert


//Tipos de Dados / Tipos de Variáveis
// Javascript -> Tipagem dinâmica
// Tipos primitivos -- string, number, boolean, null, undefined

var nome = "Leonardo"; // String

console.log("nome", nome, typeof nome);

let idade = 39; //number
console.log("idade", idade, typeof idade);

const magro = true; // Boolean
console.log("magro", magro, typeof magro);

var nula = null; // null
console.log ("nula", nula, typeof nula);

var indefinida; //undefined
console.log("indefinida", indefinida, typeof indefinida);

//Diferenças entre var / let /const
// Var - permite redeclaração da variável.
var nome =1;
console.log("nome", nome, typeof nome);

//var - permite reatribuição de valor
nome = false;
console.log("nome", nome, typeof nome);

//let - redeclaração de variável (não permite)
//idade = '25'; //SintaxeError
//console.log("idade", idade, typeof idade);

// Const - reatricuição de variável e reatribuição de valor (não permite)
//const magro = true; //SintaxError // TypeError
