function maior(){
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));
    if (num1<num2){
        document.getElementById("mensagem").innerHTML = (`Analisando os dois valores <mark> ${num1} </mark> e <mark> ${num2} </mark>, o maior valor é ${num2}`)

    } else if (num1 > num2){
        document.getElementById("mensagem").innerHTML = (`Analisando os dois valores <mark> ${num1} </mark> e <mark> ${num2} </mark>, o maior valor é ${num1}`)
    } else {
        document.getElementById("mensagem").innerHTML = (`Analisando os dois valores <mark> ${num1} </mark> e <mark> ${num2} </mark>, ambos são <strong>iguais</strong>`)
    }
    
}