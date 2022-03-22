console.log("=== Condicionais ===");

// Entrada

const aluno = prompt ("Digite o nome do aluno:");
const nota = prompt ("Digite a nota");
console.log(aluno, nota);


//Exemplo - SWITCH / CASE
switch (nota) {
    case '1':
        resp="Reprovado"
        break;

    default:
        break;
}



/*
if (nota>=6){
    resp="Aprovado"
} else{
    if (nota>=4){
        resp="Recuperação"
    } else{
        resp="Reprovado"
    }
}
*/


// Processamento
/*
let resp = null;
if (nota >= 6){
    resp ="Aprovado!";
}

if (nota>=4 && nota<6){
    resp = "Recuperação";
}

if (nota<4){
    resp ="Reprovado";
}
*/

//Saída
document.write(`Aluno : ${aluno} <br>
Nota: ${nota} <br>
Situação: ${resp}`)
