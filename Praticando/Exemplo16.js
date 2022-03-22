function idade(){
    let ano = parseFloat(prompt("Em que ano você nasceu?"));
    document.getElementById("mensagem").innerHTML = (`Quem nasceu em ${ano} vai completar ${2022 - ano} anos em 2022`)
}