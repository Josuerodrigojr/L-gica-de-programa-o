/*
function faixaEtaria() {
    const idade = parseFloat(document.getElementById('idade').value);
    let resposta = null;
    if (idade>=21){
        resposta ="Você é adulto";
    } else {
        resposta ="Você não é adulto";
    }
    document.getElementById("resposta").value = resposta;

    
}
*/

function faixaEtaria() {
    const idade = parseFloat(document.getElementById('idade').value);
    let resposta = null;
    if (idade<=12){
        resposta ="Você é criança";
    } else if (idade>=13 && idade<=17) {
        resposta ="Você é adolescente";
    } else if (idade>=18 && idade<=64) {
        resposta ="Você é adulto";
    } else {
        resposta = "Você é idoso";
    }
    document.getElementById("resposta").value = resposta;

    
}
