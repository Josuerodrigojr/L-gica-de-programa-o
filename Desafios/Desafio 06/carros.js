
const carroModelo = [];
let resultado = " ";
function carro (){

    let modelo = document.getElementById("modelo").value;
    carroModelo.push(modelo);
    document.getElementById("quantCarros").textContent = carroModelo.length;
    document.getElementById("modelo").value = " ";
    console.log(carroModelo);
    if (carroModelo.length == 5){
        for (let i = 0; i<5; i++){

            resultado = resultado + carroModelo[i];
        }
        document.getElementById("modelos").textContent = resultado;

}
}