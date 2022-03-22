function data(){
    var data = new Date();
    var dias =[
        'Segunda','Terça','Quarta','Quinta','Sexta','Sábado', 'Domingo'
    ];

    document.getElementById('mensagem').innerHTML = (`Dia <mark>${data.getDate()} </mark> <br> Mês <mark>${data.getMonth()} </mark> <br> Ano <mark>${data.getFullYear()} </mark> <br> Dia da semana <mark>${dias[data.getDate() % 7]} </mark> <br> Hora <mark>${data.getHours()} </mark> <br> Minutos <mark>${data.getMinutes()} </mark> <br> Segundos <mark>${data.getSeconds()} </mark>`);

}