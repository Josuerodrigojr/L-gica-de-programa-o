
    let carro1 = []

function carro(){
    const modelo = document.getElementById('modelo');
    const ano = document.getElementById('ano');
    const cor = document.getElementById('cor');
    const situacao = document.getElementById('situacao');
    carros = { 
        modelo: modelo.value,
        ano : ano.value,
        cor : cor.value,
        situacao : situacao.value

    };

    console.log(carros);
    carro1.push(carros);
    // carro2.forEach(function(indice){
    //     carro1.push(carro[indice])

    // });
    console. clear()
    console.table(carro1);
    
    document.getElementById('modelo').value = " ";
    document.getElementById('ano').value = " ";

}