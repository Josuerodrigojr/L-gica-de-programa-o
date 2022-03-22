
document.getElementById("mensagem").innerHTML = ("O resultado vai aparecer aqui");
function media(){
    let nome = prompt("Qual o nome do aluno?");
    let nota1 = parseFloat(prompt("A primeira nota do aluno"));
    let nota2 = parseFloat(prompt("A segunda nota do aluno"));
    let media = (nota1 + nota2)/2;
    let aviso = '';
    if (media< 6){
        aviso = "Estude um pouco mais !"
    } else {
        aviso = "Parabéns!"
    }
    document.getElementById("mensagem").innerHTML = (`Calculando a média final de <mark> ${nome} </mark> <br> As notas obtidas forma ${nota1} e ${nota2} <br> A média final será ${media} <br> A mensagem que temo é: ${aviso}`)
}