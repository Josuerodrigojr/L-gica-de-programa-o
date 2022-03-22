let resultado = "Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.";
document.getElementById("mensagem").innerHTML = resultado;
function aleatorio(){
    let numero = Math.floor(Math.random() * 100).toFixed();
    resultado = (`${resultado} <br> Acabei de pensar no número <mark>${numero}</mark>`);
    document.getElementById("mensagem").innerHTML = resultado;
    
}

function limpar(){
    document.getElementById("mensagem").innerHTML = " ";
    resultado = " ";
}