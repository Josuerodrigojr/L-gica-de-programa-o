console.log("=== CARROS ===");

// PREMISSAS
// 1 - ARMAZENAR DADOS EM UM OBJETO
// 2 - COLOCAR O OBJETO DENTRO DE UM ARRAY
// 3 - EXIBIR TUDO QUE FOR CADASTRADO DENTRO DO CONSOLE.TABLE
const carros = [];
const valor = [];

function adicionar() {
  // entrada
  const id = document.getElementById("ID");
  const modelo = document.getElementById("modelo");
  const ano = document.getElementById("ano");
  const cor = document.getElementById("cor");
  const situacao = document.getElementById("situacao");
  const preco = document.getElementById("preco");
  // console.log(modelo, ano, cor, situacao);
  console.log(modelo.value, ano.value, cor.value, situacao.value);
  // console.log(situacao);
  // console.log(situacao.options); // array
  // console.log(situacao.options.selectedIndex); // indice
  // console.log(situacao.options[situacao.options.selectedIndex].value);

  // processamento
  const carro = {
    id: id.value,
    modelo: modelo.value,
    ano: ano.value,
    cor: cor.value,
    situacao: situacao.value,
    preco: preco.value
  };

  console.log(carro);

  valor.push(parseFloat(preco.value));
  console.log(valor)
  carros.push(carro); // adiciona no array

  // saida
  console.table(carros);

  // exibir a tabela
  const lista = document.getElementById("lista");
  lista.innerHTML = 
  carros
    // .filter(function(carro) {
    //   return carro.ano === '2015'
    // })
    .map(function(carro) {
       return `<tr>
       <td>${carro.modelo}</td>
        <td>${carro.modelo}</td>
        <td>${carro.ano}</td>
        <td>${carro.cor}</td>
        <td>${carro.situacao}</td>
        <td>R$ ${carro.preco}</td>
      </tr>`;
    })
    .join("");

  // limpar os campos
  id.value = "";
  modelo.value = '';
  ano.value = '';
  cor.value = '';
  preco.value = "";
  // situacao.value = '';

  // dar foco no primeiro campo
  id.focus();
}

function total() {
  const valorTotal = valor.reduce((index, precoDoCarro) => index + precoDoCarro, 0);
  document.getElementById('valorTotal').value = (`R$ ${valorTotal}`);

}


// AVALIACAO
/*
1 - FAZER UMA COPIA DO EXERCICIO DA LOJA DE CARROS
2 - ADICIONAR UMA COLUNA COM UM ID (AO LADO DO MODELO)
3 - ADICIONAR NO FORMULARIO UM CAMPO PARA RECEBER O PRECO
4 - EXIBIR UMA COLUNA COM O O PRECO
5 - EXIBIR O TOTAL DE TODOS OS VEICULOS CADASTRADOS (REQUISITO -> USAR REDUCE)
*/