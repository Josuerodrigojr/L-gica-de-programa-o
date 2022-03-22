let clique = 0;
document.getElementById('contar').innerHTML = (`O contador está com ${clique} cliques`)
function contador(){
    clique++;
    document.getElementById('contar').innerHTML = (`O contador está com ${clique} cliques`)


}

function zerar(){
    clique = 0;
    document.getElementById('contar').innerHTML = (`O contador está com ${clique} cliques`)

}