let resultado = "Já pensei em um valor entre 1 - 100"
document.getElementById('mensagem').innerHTML = resultado;
let numero = Math.floor(Math.random() * 100).toFixed();
function adivinhacao(){

    let adivinhar = parseFloat(prompt('Tente adivinha o número: '));
    if (numero > adivinhar) {
        resultado = (`${resultado} <br> Você falou <mark>${adivinhar}</mark>. Meu número é <strong>MAIOR!</strong>`);
        document.getElementById("mensagem").innerHTML = resultado;
    }else if(numero < adivinhar){
        resultado = (`${resultado} <br> Você falou <mark>${adivinhar}</mark>. Meu número é <strong>MENOR!</strong>`);
        document.getElementById("mensagem").innerHTML = resultado;
    } else {
        resultado = (`${resultado} <br> <strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${numero}!`);
        document.getElementById("mensagem").innerHTML = resultado;
        document.getElementById('remocao').style.visibility = 'hidden'
    }

}