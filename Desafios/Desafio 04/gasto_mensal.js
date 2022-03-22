function custo() {
    let distancia = parseFloat(document.getElementById('distEntregas').value);
    let numeroDeEntregas = parseFloat(document.getElementById('numEntregas').value);
    let dias = parseFloat(document.getElementById('quantDias').value);
    const distanciaDeCasa = 20;
    const valorDaGasolina = 5.5;
    const tanque = 40;

    let distanciaMensal = 20*dias + distancia*numeroDeEntregas*dias;
    let carroDistancia = distanciaMensal/12;
    let valorMensal =   carroDistancia*valorDaGasolina;
    let abastecer = distanciaMensal/tanque;
    console.log(abastecer)
    document.getElementById('gastoMes').value = valorMensal;
    document.getElementById('abastecer').value = Math.ceil(abastecer);
}