let resultado = " ";
let inicial = 2;
let final = 20;
for (let linha = 1; linha<=10; linha++){
    for (let coluna =1; coluna<=20; coluna++){
        if (coluna == inicial || coluna == final){
            resultado = resultado + "*";

        } else if (coluna>inicial && coluna<final){
            resultado = resultado + "-";
        } else{
            resultado = resultado + "&nbsp;";
        }
    }
    inicial++;
    final--;
    document.write(resultado, "<br>");
    resultado = " ";
    
}